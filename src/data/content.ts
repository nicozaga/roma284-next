import type { Locale } from "@i18n/config";

/** Contenuti home locale-aware — frasi auto-contenute, dati esatti (AI/SEO). */

type Usp = { icon: string; title: string; text: string };
export const USP: Partial<Record<Locale, Usp[]>> = {
  it: [
    { icon: "wifi", title: "WiFi 1 Gbit/s", text: "Fibra ultraveloce e spazio di lavoro dedicato: lavora come in ufficio." },
    { icon: "train", title: "33 min da Milano", text: "Frecciarossa dalla stazione a 900 metri, fino a 52 treni diretti al giorno." },
    { icon: "walk", title: "Centro storico", text: "Piazza Cavalli e il Duomo a 5 minuti a piedi. Tutto raggiungibile a piedi." },
    { icon: "leaf", title: "Patio privato", text: "Il tuo angolo all'aperto sul cortile interno, per colazioni e aperitivi." },
  ],
  en: [
    { icon: "wifi", title: "1 Gbit/s Wi-Fi", text: "Ultra-fast fibre and a dedicated workspace: work as if you were in the office." },
    { icon: "train", title: "33 min from Milan", text: "Frecciarossa from the station 900 m away, up to 52 direct trains a day." },
    { icon: "walk", title: "Historic centre", text: "Piazza Cavalli and the Cathedral are a 5-minute walk. Everything on foot." },
    { icon: "leaf", title: "Private patio", text: "Your outdoor corner on the inner courtyard, for breakfast and aperitifs." },
  ],
  fr: [
    { icon: "wifi", title: "Wi-Fi 1 Gbit/s", text: "Fibre ultra-rapide et espace de travail dédié : travaillez comme au bureau." },
    { icon: "train", title: "33 min de Milan", text: "Frecciarossa depuis la gare à 900 m, jusqu'à 52 trains directs par jour." },
    { icon: "walk", title: "Centre historique", text: "Piazza Cavalli et la cathédrale à 5 minutes à pied. Tout est accessible à pied." },
    { icon: "leaf", title: "Patio privé", text: "Votre coin en plein air sur la cour intérieure, pour les petits-déjeuners et les apéritifs." },
  ],
  de: [
    { icon: "wifi", title: "WLAN 1 Gbit/s", text: "Ultraschnelles Glasfaser-Internet und ein eigener Arbeitsplatz: Arbeiten wie im Büro." },
    { icon: "train", title: "33 Min. von Mailand", text: "Frecciarossa ab dem Bahnhof in 900 m Entfernung, bis zu 52 Direktzüge pro Tag." },
    { icon: "walk", title: "Historisches Zentrum", text: "Piazza Cavalli und der Dom in 5 Gehminuten. Alles bequem zu Fuß erreichbar." },
    { icon: "leaf", title: "Privater Patio", text: "Ihr Freiluftplatz am Innenhof, ideal für Frühstück und Aperitif." },
  ],
  es: [
    { icon: "wifi", title: "Wi-Fi 1 Gbit/s", text: "Fibra ultrarrápida y un espacio de trabajo dedicado: trabaja como si estuvieras en la oficina." },
    { icon: "train", title: "33 min desde Milán", text: "Frecciarossa desde la estación, a 900 metros, con hasta 52 trenes directos al día." },
    { icon: "walk", title: "Centro histórico", text: "Piazza Cavalli y el Duomo a 5 minutos a pie. Todo se llega caminando." },
    { icon: "leaf", title: "Patio privado", text: "Tu rincón al aire libre en el patio interior, para desayunos y aperitivos." },
  ],
  pt: [
    { icon: "wifi", title: "Wi-Fi 1 Gbit/s", text: "Fibra ultrarrápida e um espaço de trabalho dedicado: trabalhe como se estivesse no escritório." },
    { icon: "train", title: "33 min de Milão", text: "Frecciarossa a partir da estação, a 900 metros, com até 52 comboios diretos por dia." },
    { icon: "walk", title: "Centro histórico", text: "A Piazza Cavalli e o Duomo ficam a 5 minutos a pé. Tudo se alcança a pé." },
    { icon: "leaf", title: "Pátio privado", text: "O seu recanto ao ar livre no pátio interior, para pequenos-almoços e aperitivos." },
  ],
};

export const APARTMENT_INTRO: Partial<Record<Locale, string>> = {
  it: "Roma284 è un elegante bilocale di 50 m² al piano terra, nel centro storico di Piacenza. Unisce i comfort moderni a un contesto storico autentico: cucina open space completamente attrezzata, Wi-Fi in fibra da 1 Gbit/s e un patio privato sul cortile interno. Ospita fino a 4 persone, con ingresso diretto senza scale.",
  en: "Roma284 is an elegant 50 m² one-bedroom apartment on the ground floor, in the historic centre of Piacenza. It blends modern comforts with an authentic historic setting: a fully equipped open-plan kitchen, 1 Gbit/s fibre Wi-Fi and a private patio on the inner courtyard. It hosts up to 4 guests, with step-free direct access.",
  fr: "Roma284 est un élégant deux-pièces de 50 m² au rez-de-chaussée, dans le centre historique de Plaisance. Il allie le confort moderne à un cadre historique authentique : cuisine ouverte entièrement équipée, Wi-Fi fibre 1 Gbit/s et un patio privé sur la cour intérieure. Il accueille jusqu'à 4 personnes, avec un accès direct de plain-pied.",
  de: "Roma284 ist eine elegante 50 m² große Zweizimmerwohnung im Erdgeschoss, im historischen Zentrum von Piacenza. Sie verbindet modernen Komfort mit einem authentischen historischen Ambiente: voll ausgestattete offene Küche, Glasfaser-WLAN mit 1 Gbit/s und ein privater Patio am Innenhof. Sie bietet Platz für bis zu 4 Personen, mit ebenerdigem Direktzugang ohne Treppen.",
  es: "Roma284 es un elegante apartamento de un dormitorio de 50 m² en planta baja, en el centro histórico de Piacenza. Combina las comodidades modernas con un entorno histórico auténtico: cocina abierta totalmente equipada, Wi-Fi de fibra de 1 Gbit/s y un patio privado en el patio interior. Aloja hasta 4 personas, con acceso directo y sin escaleras.",
  pt: "O Roma284 é um elegante apartamento T1 de 50 m² no rés-do-chão, no centro histórico de Piacenza. Combina o conforto moderno com um ambiente histórico autêntico: cozinha aberta totalmente equipada, Wi-Fi de fibra de 1 Gbit/s e um pátio privado no pátio interior. Acolhe até 4 pessoas, com acesso direto e sem escadas.",
};

type Conn = { from: string; mode: string; time: string };
export const CONNECTIONS: Partial<Record<Locale, Conn[]>> = {
  it: [
    { from: "Milano Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Stazione di Piacenza", mode: "a piedi", time: "9 min · 900 m" },
    { from: "Piazza Cavalli e Duomo", mode: "a piedi", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + metro", time: "~1 h 30" },
  ],
  en: [
    { from: "Milan Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Piacenza station", mode: "on foot", time: "9 min · 900 m" },
    { from: "Piazza Cavalli & Cathedral", mode: "on foot", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + metro", time: "~1 h 30" },
  ],
  fr: [
    { from: "Milan Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Gare de Plaisance", mode: "à pied", time: "9 min · 900 m" },
    { from: "Piazza Cavalli et cathédrale", mode: "à pied", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + métro", time: "~1 h 30" },
  ],
  de: [
    { from: "Mailand Centrale", mode: "Frecciarossa", time: "33 Min." },
    { from: "Bahnhof Piacenza", mode: "zu Fuß", time: "9 Min. · 900 m" },
    { from: "Piazza Cavalli & Dom", mode: "zu Fuß", time: "5 Min. · 350 m" },
    { from: "Messe Mailand Rho", mode: "Frecciarossa + Metro", time: "~1 Std. 30" },
  ],
  es: [
    { from: "Milán Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Estación de Piacenza", mode: "a pie", time: "9 min · 900 m" },
    { from: "Piazza Cavalli y Duomo", mode: "a pie", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + metro", time: "~1 h 30" },
  ],
  pt: [
    { from: "Milão Centrale", mode: "Frecciarossa", time: "33 min" },
    { from: "Estação de Piacenza", mode: "a pé", time: "9 min · 900 m" },
    { from: "Piazza Cavalli e Duomo", mode: "a pé", time: "5 min · 350 m" },
    { from: "Fiera Milano Rho", mode: "Frecciarossa + metro", time: "~1 h 30" },
  ],
};

export const POI: Partial<Record<Locale, string[]>> = {
  it: [
    "Piazza Cavalli e i cavalli del Mochi",
    "Duomo di Piacenza",
    "Palazzo Farnese",
    "Galleria d'Arte Moderna Ricci Oddi",
    "Zona pedonale e Corso Vittorio Emanuele",
  ],
  en: [
    "Piazza Cavalli and the Mochi horse statues",
    "Piacenza Cathedral",
    "Palazzo Farnese",
    "Ricci Oddi Modern Art Gallery",
    "Pedestrian area and Corso Vittorio Emanuele",
  ],
  fr: [
    "Piazza Cavalli et les chevaux du Mochi",
    "Cathédrale de Plaisance",
    "Palazzo Farnese",
    "Galerie d'art moderne Ricci Oddi",
    "Zone piétonne et Corso Vittorio Emanuele",
  ],
  de: [
    "Piazza Cavalli und die Pferde des Mochi",
    "Dom von Piacenza",
    "Palazzo Farnese",
    "Galerie für moderne Kunst Ricci Oddi",
    "Fußgängerzone und Corso Vittorio Emanuele",
  ],
  es: [
    "Piazza Cavalli y los caballos del Mochi",
    "Duomo de Piacenza",
    "Palazzo Farnese",
    "Galería de Arte Moderno Ricci Oddi",
    "Zona peatonal y Corso Vittorio Emanuele",
  ],
  pt: [
    "Piazza Cavalli e os cavalos do Mochi",
    "Duomo de Piacenza",
    "Palazzo Farnese",
    "Galeria de Arte Moderna Ricci Oddi",
    "Zona pedonal e Corso Vittorio Emanuele",
  ],
};

type Why = { icon: string; title: string; text: string };
export const WHY_DIRECT: Partial<Record<Locale, Why[]>> = {
  it: [
    { icon: "clock", title: "Check-in flessibile", text: "Concordiamo gli orari su misura per il tuo viaggio, senza vincoli rigidi." },
    { icon: "chat", title: "Contatto diretto con noi", text: "Parli direttamente con chi gestisce la casa: risposte rapide, niente intermediari." },
    { icon: "check", title: "Conferma immediata", text: "Prenoti ora e ricevi subito la conferma via WhatsApp o email." },
  ],
  en: [
    { icon: "clock", title: "Flexible check-in", text: "We arrange times tailored to your trip, with no rigid constraints." },
    { icon: "chat", title: "Direct contact with us", text: "You speak directly with the people who run the home: fast replies, no middlemen." },
    { icon: "check", title: "Instant confirmation", text: "Book now and get immediate confirmation by WhatsApp or email." },
  ],
  fr: [
    { icon: "clock", title: "Check-in flexible", text: "Nous convenons des horaires sur mesure pour votre voyage, sans contraintes rigides." },
    { icon: "chat", title: "Contact direct avec nous", text: "Vous parlez directement avec ceux qui gèrent la maison : réponses rapides, sans intermédiaires." },
    { icon: "check", title: "Confirmation immédiate", text: "Réservez maintenant et recevez aussitôt la confirmation par WhatsApp ou e-mail." },
  ],
  de: [
    { icon: "clock", title: "Flexibler Check-in", text: "Wir stimmen die Zeiten individuell auf Ihre Reise ab, ohne starre Vorgaben." },
    { icon: "chat", title: "Direkter Kontakt mit uns", text: "Sie sprechen direkt mit den Gastgebern: schnelle Antworten, keine Zwischenhändler." },
    { icon: "check", title: "Sofortige Bestätigung", text: "Jetzt buchen und sofort die Bestätigung per WhatsApp oder E-Mail erhalten." },
  ],
  es: [
    { icon: "clock", title: "Check-in flexible", text: "Acordamos los horarios a medida de tu viaje, sin restricciones rígidas." },
    { icon: "chat", title: "Contacto directo con nosotros", text: "Hablas directamente con quienes gestionan la casa: respuestas rápidas, sin intermediarios." },
    { icon: "check", title: "Confirmación inmediata", text: "Reserva ahora y recibe al instante la confirmación por WhatsApp o correo electrónico." },
  ],
  pt: [
    { icon: "clock", title: "Check-in flexível", text: "Combinamos os horários à medida da sua viagem, sem restrições rígidas." },
    { icon: "chat", title: "Contacto direto connosco", text: "Fala diretamente com quem gere a casa: respostas rápidas, sem intermediários." },
    { icon: "check", title: "Confirmação imediata", text: "Reserve agora e receba de imediato a confirmação por WhatsApp ou e-mail." },
  ],
};

/** Helper con fallback IT. */
export const pick = <T,>(rec: Partial<Record<Locale, T>>, locale: Locale): T =>
  (rec[locale] ?? rec.it) as T;
