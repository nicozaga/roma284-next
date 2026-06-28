"""Publisher — notifica IndexNow degli URL pubblicati.

Il commit/push lo fa il workflow GitHub Actions (git nativo). Questo script:
1. ricava gli URL degli articoli aggiunti (da git diff o da lista esplicita),
2. li notifica a IndexNow (un POST a api.indexnow.org copre Bing/Yandex/Seznam/Naver/Yep).

Nota: Google NON usa IndexNow (si affida a sitemap + GSC).

Uso:
  python -m pipeline.publisher.run --since HEAD~1
  python -m pipeline.publisher.run --files src/content/blog/foo.md src/content/blog/en/foo.md
  python -m pipeline.publisher.run --since HEAD~1 --dry-run
"""
from __future__ import annotations
import argparse
import glob
import json
import os
import re
import subprocess
from pathlib import Path

from pipeline.common.urls import blog_file_to_url, SITE_URL

INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow"
HOST = "www.roma284.it"


def changed_blog_files(since: str) -> list[str]:
    r = subprocess.run(
        ["git", "diff", "--name-only", f"{since}", "HEAD", "--", "src/content/blog"],
        capture_output=True, text=True,
    )
    return [l.strip() for l in r.stdout.splitlines() if l.strip().endswith(".md")]


def find_key(repo_root: str) -> str | None:
    if os.environ.get("INDEXNOW_KEY"):
        return os.environ["INDEXNOW_KEY"]
    for f in glob.glob(str(Path(repo_root) / "public" / "*.txt")):
        stem = Path(f).stem
        if re.fullmatch(r"[a-f0-9]{16,}", stem):
            return stem
    return None


def ping_indexnow(urls: list[str], key: str, dry_run: bool = False) -> int:
    payload = {
        "host": HOST,
        "key": key,
        "keyLocation": f"{SITE_URL}/{key}.txt",
        "urlList": urls,
    }
    if dry_run:
        print("[indexnow] DRY-RUN payload:\n" + json.dumps(payload, indent=2))
        return 0
    import requests  # import lazy
    r = requests.post(INDEXNOW_ENDPOINT, json=payload, timeout=30,
                      headers={"Content-Type": "application/json; charset=utf-8"})
    print(f"[indexnow] HTTP {r.status_code} per {len(urls)} URL")
    return 0 if r.status_code in (200, 202) else 1


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Publisher — ping IndexNow")
    ap.add_argument("--since", default="HEAD~1", help="ref git per il diff (default HEAD~1)")
    ap.add_argument("--files", nargs="*", help="lista esplicita di file .md (bypassa git)")
    ap.add_argument("--repo-root", default=os.environ.get("REPO_ROOT", "."))
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args(argv)

    files = args.files if args.files else changed_blog_files(args.since)
    urls = sorted({blog_file_to_url(f) for f in files})
    if not urls:
        print("[publisher] nessun articolo nuovo da notificare.")
        return 0
    print(f"[publisher] {len(urls)} URL da notificare:")
    for u in urls:
        print("  -", u)

    key = find_key(args.repo_root)
    if not key:
        print("[publisher] chiave IndexNow non trovata (public/*.txt o INDEXNOW_KEY): salto il ping.")
        return 0
    return ping_indexnow(urls, key, dry_run=args.dry_run)


if __name__ == "__main__":
    raise SystemExit(main())
