# Setup roma284-next — Istruzioni pratiche

> Segui questi passi PRIMA di aprire la nuova chat con Opus 4.8. Tempo stimato: 15-20 minuti.

---

## Step 1 — Crea la nuova cartella

Apri il Terminale e lancia:

```bash
cd ~/Documents/Coding
mkdir roma284-next
cd roma284-next
```

## Step 2 — Sposta i file master nella nuova cartella

```bash
# Sposta il prompt master e queste istruzioni nella nuova cartella
mv ~/Documents/Coding/Roma284/PROMPT_MASTER.md ~/Documents/Coding/roma284-next/
mv ~/Documents/Coding/Roma284/SETUP_INSTRUCTIONS.md ~/Documents/Coding/roma284-next/
```

## Step 3 — Copia gli asset da riutilizzare

Foto e icone dalla cartella attuale alla nuova:

```bash
# Crea la struttura asset
mkdir -p ~/Documents/Coding/roma284-next/src/assets/gallery
mkdir -p ~/Documents/Coding/roma284-next/src/assets/hero

# Copia gallery
cp -R ~/Documents/Coding/Roma284/gallery/* ~/Documents/Coding/roma284-next/src/assets/gallery/

# Copia hero image
cp ~/Documents/Coding/Roma284/IMG_4058-*.* ~/Documents/Coding/roma284-next/src/assets/hero/

# Copia icona/favicon
cp ~/Documents/Coding/Roma284/icon.svg ~/Documents/Coding/roma284-next/src/assets/
```

## Step 4 — Inizializza Git

```bash
cd ~/Documents/Coding/roma284-next
git init
echo "node_modules
.DS_Store
dist
.env
.env.local
.vercel
.astro" > .gitignore
git add .
git commit -m "Initial commit: master prompt and assets"
```

## Step 5 — (Opzionale ma consigliato) Crea repo GitHub

Apri https://github.com/new e crea un repo privato chiamato `roma284-next` (non aggiungere README, .gitignore, license — li abbiamo già).

Poi nel terminale:

```bash
git remote add origin git@github.com:TUO_USERNAME/roma284-next.git
git branch -M main
git push -u origin main
```

## Step 6 — Connetti Vercel

1. Vai su https://vercel.com/new
2. Import del repo `roma284-next`
3. Framework Preset: Astro (verrà rilevato automaticamente dopo Step 7)
4. Deploy → ottieni URL tipo `roma284-next-xxx.vercel.app`

> **Lascia perdere se non hai ancora il repo Astro**. Vercel lo riconoscerà automaticamente quando Claude (Opus 4.8) inizializzerà il progetto nella nuova chat.

## Step 7 — Apri nuova chat con Opus 4.8

1. Apri Cowork desktop
2. **Nuova chat** con modello **Opus 4.8** selezionato
3. **Seleziona la cartella** `~/Documents/Coding/roma284-next/`
4. Come **primo messaggio**, incolla tutto il contenuto di `PROMPT_MASTER.md` (apri il file, seleziona tutto, copia, incolla)
5. Claude leggerà il prompt, capirà tutto il contesto, e inizierà la Settimana 1 della roadmap (inizializzazione progetto Astro)

## Step 8 — Cosa succede dopo

Claude (Opus 4.8) procederà settimana per settimana seguendo la roadmap dentro `PROMPT_MASTER.md` sezione 16. Tu rispondi quando ti chiede conferme o input.

Cose che probabilmente ti chiederà nei primi messaggi:
- Conferma slug tradotti per le 11 lingue (sono già nel prompt, vanno bene)
- Tono di voce desiderato (elegante? amichevole? entrambi?)
- Foto chi siamo: usare quella esistente o scattarne una nuova?
- Speed test reale del WiFi da inserire come screenshot (per landing smart-working)
- Recensioni testuali: vuoi sceglierle tu da Airbnb/Booking o le seleziono io?

---

## Cartella vecchia: cosa fare

**Per ora non toccarla.** Resta in produzione su `www.roma284.it` mentre il nuovo viene costruito.

Quando il nuovo sito sarà pronto e testato:
1. Cambiamo i DNS / dominio Vercel
2. Configuriamo redirect 301 dai vecchi URL ai nuovi
3. Aspettiamo 30-60 giorni che Google reindicizzi
4. Solo allora puoi archiviare la cartella vecchia

## Domande?

Se qualcosa non torna durante il setup, torna qui (in questa chat) e chiedi. Per tutto il resto del lavoro, prosegui nella nuova chat con Opus 4.8.
