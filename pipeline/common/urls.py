"""Mappa file articolo -> URL pubblico del sito."""
from __future__ import annotations

from pipeline.common.i18n import LOCALES, DEFAULT_LOCALE

SITE_URL = "https://www.roma284.it"  # canonico con www
_BLOG_PREFIX = "src/content/blog/"


def blog_file_to_url(path: str) -> str:
    """'src/content/blog/en/foo.md' -> 'https://www.roma284.it/en/blog/foo/'.
    'src/content/blog/foo.md' (IT) -> 'https://www.roma284.it/blog/foo/'.
    """
    p = path.replace("\\", "/")
    i = p.find(_BLOG_PREFIX)
    if i != -1:
        p = p[i + len(_BLOG_PREFIX):]
    if p.endswith(".md"):
        p = p[:-3]
    parts = [s for s in p.split("/") if s]
    if len(parts) >= 2 and parts[0] in LOCALES and parts[0] != DEFAULT_LOCALE:
        lang, slug = parts[0], "/".join(parts[1:])
        return f"{SITE_URL}/{lang}/blog/{slug}/"
    # IT (radice)
    return f"{SITE_URL}/blog/{'/'.join(parts)}/"
