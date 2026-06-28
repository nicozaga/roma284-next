"""Fatti del brand iniettati nel prompt del Writer.

Estratti da SITE_CONTEXT.md. Sono regole VINCOLANTI: niente prezzi €,
mai nominare Airbnb/Booking, leve corrette (33 min Milano, pet-friendly, ecc.).
"""

BRAND_FACTS = """\
Roma284 — appartamento per affitti brevi in Via Roma 284, 29121 Piacenza (Emilia-Romagna).
- Boutique nel centro storico; 50 m², 2 locali, max 4 ospiti; patio privato; cucina attrezzata.
- A 33 minuti da Milano Centrale in Frecciarossa; stazione di Piacenza a 900 m / ~9 min a piedi; fino a 52 treni diretti/giorno.
- Pet-friendly: animali sempre ammessi gratis.
- Self check-in con smart lock dalle 15:00 (ingresso autonomo); check-out 10:00.
- WiFi in fibra 1 Gbit/s. Rating eccellenti (Superhost).
- Target: business traveler/fiere (Milano, Piacenza, Parma), smart worker, turisti del Nord Italia, sosta in A1.
"""

BRAND_RULES = """\
REGOLE DI BRAND (vincolanti):
- NON nominare MAI Airbnb o Booking nel testo.
- NESSUN prezzo in euro, nessuna cifra monetaria, nessuna garanzia di sconto.
- L'unica leva prezzo ammessa è il messaggio soft: prenotando in diretta si risparmia ("fino al 15% in meno"). Usalo al massimo una volta, con tatto.
- Tono pratico, concreto, utile. Niente markettese. Niente claim non verificabili.
- Valorizza quando pertinente: 33 min da Milano in treno, patio privato, pet-friendly gratis, self check-in con smart lock, WiFi 1 Gbit, cucina attrezzata, centro storico tranquillo.
- NON inventare orari, prezzi dei biglietti dell'evento o dettagli non forniti. Se un dato non è nei fatti dell'evento, non scriverlo.
"""

# Struttura/stile dell'articolo richiesto (coerente con FRONTMATTER_SPEC.md)
ARTICLE_STYLE = """\
STILE ARTICOLO:
- ~280–380 parole. Tono pratico.
- NIENTE titolo H1 nel corpo (il titolo sta nel frontmatter).
- 3–4 sezioni con intestazioni "##".
- Grassetto sui dati chiave (date, durata, distanze).
- Chiudi con una breve lista "## In sintesi" (3–5 punti) e poi UNA frase di CTA soft verso la disponibilità.
- Collega l'evento al soggiorno a Roma284 (perché conviene fare base a Piacenza).
"""

# Caratteristiche appartamento per la ROTAZIONE: ogni articolo-evento ne mette
# una diversa in primo piano (round-robin via stato), così a turno le copri tutte.
FEATURES_ROTATION = [
    "i 33 minuti da Milano Centrale in Frecciarossa",
    "il patio privato",
    "il WiFi in fibra da 1 Gbit/s per lavorare",
    "la cucina completamente attrezzata",
    "il self check-in autonomo con smart lock",
    "l'essere pet-friendly (animali ammessi gratis)",
    "la posizione nel centro storico, a 9 minuti a piedi dalla stazione",
]

# Stile del roundup settimanale "Il prossimo weekend a Piacenza" (solo IT).
ROUNDUP_STYLE = """\
STILE ROUNDUP "IL PROSSIMO WEEKEND A PIACENZA" (solo italiano):
- Articolo-format ricorrente: intro breve + sezioni "##" per tipo (Concerti e musica, Cultura e mostre, Food e sagre, Fiere, In città) con le segnalazioni della settimana.
- Per ogni segnalazione: nome, quando, dove, una riga di perché vale.
- Ometti le sezioni senza eventi. Niente titolo H1 nel corpo.
- Chiudi legando a Roma284 come base comoda (centro storico, a due passi dalla stazione) + CTA soft con {{BOOK_URL}}.
- Usa SOLO i dati forniti negli eventi: non inventare date/luoghi.
"""
