import type { Locale } from "@i18n/config";

/** FAQ complete per categoria — alimentano la pagina /faq e lo schema FAQPage. */
export interface FaqCategory {
  category: string;
  items: { q: string; a: string }[];
}

export const FAQ_FULL: Partial<Record<Locale, FaqCategory[]>> = {
  it: [
    { category: "Prenotazione", items: [
      { q: "Come prenoto Roma284?", a: "Puoi prenotare direttamente dal sito nella pagina Prenota, scegliendo le date sul calendario. Ricevi la conferma immediata via email." },
      { q: "Perché conviene prenotare in diretta?", a: "Prenotando in diretta eviti le commissioni delle piattaforme di prenotazione e di solito paghi fino al 15% in meno per lo stesso soggiorno. Hai inoltre contatto diretto con noi, check-in flessibile su richiesta e conferma immediata." },
      { q: "Posso prenotare per una sola notte?", a: "La durata minima del soggiorno può variare in base al periodo. Scrivici su WhatsApp e verifichiamo subito la disponibilità per le tue date." },
      { q: "Quante persone posso ospitare?", a: "L'appartamento ospita fino a 4 persone: letto matrimoniale (separabile in due singoli) e due poltrone letto singolo in soggiorno." },
      { q: "Posso portare il mio animale domestico?", a: "Sì, gli animali domestici sono sempre benvenuti a Roma284, senza costi aggiuntivi." },
    ] },
    { category: "Check-in e check-out", items: [
      { q: "A che ora posso fare il check-in?", a: "Il check-in è dalle 15:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo arrivo." },
      { q: "A che ora devo lasciare l'appartamento?", a: "Il check-out è entro le 10:00. Per esigenze particolari scrivici e cerchiamo una soluzione." },
      { q: "Come funziona l'ingresso?", a: "L'appartamento è al piano terra, con ingresso diretto e senza scale. Ti forniamo tutte le istruzioni prima dell'arrivo." },
      { q: "Posso lasciare i bagagli prima del check-in?", a: "Contattaci in anticipo: dove possibile cerchiamo di venire incontro alle esigenze di deposito bagagli." },
    ] },
    { category: "Servizi e comfort", items: [
      { q: "Com'è la connessione Wi-Fi?", a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s con uno spazio di lavoro dedicato: perfetto per videochiamate e smart working." },
      { q: "La cucina è attrezzata?", a: "Sì, la cucina open space ha piano a induzione, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio." },
      { q: "C'è l'aria condizionata?", a: "Sì, l'appartamento ha climatizzazione caldo/freddo e riscaldamento autonomo." },
      { q: "Ci sono lavatrice e asciugatrice?", a: "Sì, è disponibile una lavasciuga multifunzione." },
      { q: "C'è uno spazio all'aperto?", a: "Sì, un patio privato arredato sul tranquillo cortile interno, perfetto per la colazione o un aperitivo." },
      { q: "Sono forniti lenzuola e asciugamani?", a: "Sì, sono inclusi biancheria da letto di qualità con topper in memory foam e asciugamani." },
    ] },
    { category: "Posizione e trasporti", items: [
      { q: "Dove si trova esattamente l'appartamento?", a: "In Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi)." },
      { q: "Quanto dista la stazione?", a: "La stazione di Piacenza è a 900 metri, circa 9 minuti a piedi." },
      { q: "Quanto ci vuole per Milano?", a: "Milano Centrale è a 33 minuti in Frecciarossa, con fino a 52 treni diretti al giorno (prima 06:07, ultima 23:52)." },
      { q: "Come raggiungo la Fiera di Rho?", a: "Con la Frecciarossa fino a Milano Centrale, poi la metro M2 fino a Cadorna e cambio con la M1 fino a Rho Fieramilano, in circa un'ora e mezza complessiva." },
      { q: "C'è parcheggio?", a: "In Via Roma il parcheggio è su strisce blu, a pagamento di giorno e gratuito dopo le 19. A circa 300 metri c'è anche il parcheggio custodito Urban Center Parking, in Stradone Farnese 126." },
    ] },
    { category: "Pagamenti", items: [
      { q: "Come posso pagare?", a: "Il pagamento avviene in modo sicuro tramite il sistema di prenotazione del sito." },
      { q: "Servono prezzi o preventivi?", a: "Le tariffe sono mostrate nel calendario di prenotazione in base alle date scelte. Per richieste particolari scrivici." },
      { q: "È richiesta una cauzione?", a: "Eventuali dettagli su cauzione e condizioni vengono comunicati in fase di prenotazione." },
    ] },
    { category: "Cancellazione", items: [
      { q: "Posso cancellare la prenotazione?", a: "Le condizioni di cancellazione dipendono dalle date e dalla tariffa scelta e sono indicate al momento della prenotazione." },
      { q: "Cosa succede se devo modificare le date?", a: "Contattaci il prima possibile: dove c'è disponibilità cerchiamo sempre di venirti incontro." },
    ] },
  ],
  en: [
    { category: "Booking", items: [
      { q: "How do I book Roma284?", a: "You can book directly on the site from the Book page, choosing your dates on the calendar. You get instant confirmation by email." },
      { q: "Why is booking direct better?", a: "Booking direct, you skip the booking platforms' fees and usually pay up to 15% less for the same stay. You also get direct contact with us, flexible check-in on request and instant confirmation." },
      { q: "Can I book for a single night?", a: "The minimum stay can vary by season. Message us on WhatsApp and we'll check availability for your dates right away." },
      { q: "How many people can I host?", a: "The apartment hosts up to 4 people: a double bed (splittable into two singles) and two single sofa beds in the living room." },
      { q: "Can I bring my pet?", a: "Yes, pets are always welcome at Roma284, at no extra cost." },
    ] },
    { category: "Check-in and check-out", items: [
      { q: "What time can I check in?", a: "Check-in is from 15:00. Booking direct, we can arrange flexible times around your arrival." },
      { q: "What time do I have to leave?", a: "Check-out is by 10:00. For special needs, write to us and we'll look for a solution." },
      { q: "How does the entrance work?", a: "The apartment is on the ground floor, with direct, step-free access. We provide all instructions before arrival." },
      { q: "Can I drop off luggage before check-in?", a: "Contact us in advance: where possible we try to accommodate luggage storage needs." },
    ] },
    { category: "Amenities and comfort", items: [
      { q: "What is the Wi-Fi like?", a: "The apartment has 1 Gbit/s fibre Wi-Fi with a dedicated workspace: perfect for video calls and remote work." },
      { q: "Is the kitchen equipped?", a: "Yes, the open-plan kitchen has an induction hob, combi oven, dishwasher, fridge with freezer and a Nespresso coffee machine with complimentary capsules." },
      { q: "Is there air conditioning?", a: "Yes, the apartment has hot/cold air conditioning and independent heating." },
      { q: "Are there a washer and dryer?", a: "Yes, a multifunction washer-dryer is available." },
      { q: "Is there an outdoor space?", a: "Yes, a furnished private patio on the quiet inner courtyard, perfect for breakfast or an aperitif." },
      { q: "Are linens and towels provided?", a: "Yes, quality bed linen with a memory-foam topper and towels are included." },
    ] },
    { category: "Location and transport", items: [
      { q: "Where exactly is the apartment?", a: "At Via Roma 284, in the historic centre of Piacenza. Piazza Cavalli and the Cathedral are 350 metres away (5-minute walk)." },
      { q: "How far is the station?", a: "Piacenza station is 900 metres away, about a 9-minute walk." },
      { q: "How long to Milan?", a: "Milan Centrale is 33 minutes away by Frecciarossa, with up to 52 direct trains a day (first 06:07, last 23:52)." },
      { q: "How do I reach the Rho fairground?", a: "By Frecciarossa to Milan Centrale, then metro M2 to Cadorna and a change to M1 to Rho Fieramilano, in about an hour and a half overall." },
      { q: "Is there parking?", a: "On Via Roma, parking is on blue lines, paid during the day and free after 7pm. About 300 metres away there's also the guarded Urban Center Parking, at Stradone Farnese 126." },
    ] },
    { category: "Payments", items: [
      { q: "How can I pay?", a: "Payment is handled securely through the site's booking system." },
      { q: "Do you provide prices or quotes?", a: "Rates are shown in the booking calendar based on your chosen dates. For special requests, write to us." },
      { q: "Is a deposit required?", a: "Any details on deposit and conditions are communicated at the time of booking." },
    ] },
    { category: "Cancellation", items: [
      { q: "Can I cancel my booking?", a: "Cancellation terms depend on your dates and chosen rate and are shown at the time of booking." },
      { q: "What if I need to change my dates?", a: "Contact us as soon as possible: where there's availability, we always try to accommodate you." },
    ] },
  ],
  fr: [
    { category: "Réservation", items: [
      { q: "Comment réserver Roma284 ?", a: "Vous pouvez réserver directement sur le site depuis la page Réserver, en choisissant vos dates sur le calendrier. Vous recevez la confirmation immédiate par e-mail." },
      { q: "Pourquoi vaut-il mieux réserver en direct ?", a: "En réservant en direct, vous évitez les commissions des plateformes de réservation et payez généralement jusqu'à 15 % de moins pour le même séjour. Vous avez aussi un contact direct avec nous, un check-in flexible sur demande et une confirmation immédiate." },
      { q: "Puis-je réserver pour une seule nuit ?", a: "La durée minimale de séjour peut varier selon la période. Écrivez-nous sur WhatsApp et nous vérifions aussitôt la disponibilité pour vos dates." },
      { q: "Combien de personnes puis-je accueillir ?", a: "L'appartement accueille jusqu'à 4 personnes : lit double (séparable en deux lits simples) et deux fauteuils-lits simples dans le séjour." },
      { q: "Puis-je amener mon animal de compagnie ?", a: "Oui, les animaux sont toujours les bienvenus à Roma284, sans frais supplémentaires." },
    ] },
    { category: "Check-in et check-out", items: [
      { q: "À quelle heure puis-je faire le check-in ?", a: "Le check-in est à partir de 15h00. En réservant en direct, nous pouvons convenir d'horaires flexibles selon votre arrivée." },
      { q: "À quelle heure dois-je quitter l'appartement ?", a: "Le check-out est avant 10h00. Pour des besoins particuliers, écrivez-nous et nous cherchons une solution." },
      { q: "Comment fonctionne l'entrée ?", a: "L'appartement est au rez-de-chaussée, avec un accès direct et sans escaliers. Nous vous fournissons toutes les instructions avant l'arrivée." },
      { q: "Puis-je déposer mes bagages avant le check-in ?", a: "Contactez-nous à l'avance : dans la mesure du possible, nous essayons de répondre aux besoins de dépôt de bagages." },
    ] },
    { category: "Services et confort", items: [
      { q: "Comment est la connexion Wi-Fi ?", a: "L'appartement dispose d'un Wi-Fi fibre 1 Gbit/s avec un espace de travail dédié : parfait pour les visioconférences et le télétravail." },
      { q: "La cuisine est-elle équipée ?", a: "Oui, la cuisine ouverte dispose d'une plaque à induction, d'un four combiné, d'un lave-vaisselle, d'un réfrigérateur avec congélateur et d'une machine à café Nespresso avec capsules offertes." },
      { q: "Y a-t-il la climatisation ?", a: "Oui, l'appartement dispose d'une climatisation chaud/froid et d'un chauffage indépendant." },
      { q: "Y a-t-il un lave-linge et un sèche-linge ?", a: "Oui, un lave-linge séchant multifonction est disponible." },
      { q: "Y a-t-il un espace extérieur ?", a: "Oui, un patio privé meublé sur la cour intérieure tranquille, parfait pour le petit-déjeuner ou un apéritif." },
      { q: "Le linge de lit et les serviettes sont-ils fournis ?", a: "Oui, du linge de lit de qualité avec un surmatelas à mémoire de forme et des serviettes sont inclus." },
    ] },
    { category: "Emplacement et transports", items: [
      { q: "Où se trouve exactement l'appartement ?", a: "Au Via Roma 284, dans le centre historique de Plaisance. La Piazza Cavalli et la cathédrale sont à 350 mètres (5 minutes à pied)." },
      { q: "À quelle distance se trouve la gare ?", a: "La gare de Plaisance est à 900 mètres, environ 9 minutes à pied." },
      { q: "Combien de temps pour Milan ?", a: "Milan Centrale est à 33 minutes en Frecciarossa, avec jusqu'à 52 trains directs par jour (premier 06h07, dernier 23h52)." },
      { q: "Comment rejoindre la foire de Rho ?", a: "Avec la Frecciarossa jusqu'à Milan Centrale, puis le métro M2 jusqu'à Cadorna et une correspondance avec la M1 jusqu'à Rho Fieramilano, en environ une heure et demie au total." },
      { q: "Y a-t-il un parking ?", a: "Via Roma, le stationnement se fait sur les lignes bleues, payant le jour et gratuit après 19h. À environ 300 mètres se trouve aussi le parking gardé Urban Center Parking, au Stradone Farnese 126." },
    ] },
    { category: "Paiements", items: [
      { q: "Comment puis-je payer ?", a: "Le paiement s'effectue de manière sécurisée via le système de réservation du site." },
      { q: "Fournissez-vous des prix ou des devis ?", a: "Les tarifs sont affichés dans le calendrier de réservation selon les dates choisies. Pour des demandes particulières, écrivez-nous." },
      { q: "Une caution est-elle demandée ?", a: "Les éventuels détails sur la caution et les conditions sont communiqués au moment de la réservation." },
    ] },
    { category: "Annulation", items: [
      { q: "Puis-je annuler ma réservation ?", a: "Les conditions d'annulation dépendent de vos dates et du tarif choisi et sont indiquées au moment de la réservation." },
      { q: "Que se passe-t-il si je dois modifier mes dates ?", a: "Contactez-nous le plus tôt possible : s'il y a de la disponibilité, nous essayons toujours de vous accommoder." },
    ] },
  ],
  de: [
    { category: "Buchung", items: [
      { q: "Wie buche ich Roma284?", a: "Sie können direkt über die Website auf der Seite „Buchen“ reservieren, indem Sie Ihre Daten im Kalender auswählen. Sie erhalten die Bestätigung sofort per E-Mail." },
      { q: "Warum lohnt sich die Direktbuchung?", a: "Bei einer Direktbuchung sparen Sie die Gebühren der Buchungsplattformen und zahlen in der Regel bis zu 15 % weniger für denselben Aufenthalt. Außerdem haben Sie direkten Kontakt mit uns, flexiblen Check-in auf Anfrage und eine sofortige Bestätigung." },
      { q: "Kann ich für nur eine Nacht buchen?", a: "Die Mindestaufenthaltsdauer kann je nach Saison variieren. Schreiben Sie uns auf WhatsApp und wir prüfen sofort die Verfügbarkeit für Ihre Daten." },
      { q: "Für wie viele Personen ist die Wohnung geeignet?", a: "Die Wohnung bietet Platz für bis zu 4 Personen: Doppelbett (in zwei Einzelbetten teilbar) und zwei Einzel-Schlafsessel im Wohnzimmer." },
      { q: "Darf ich mein Haustier mitbringen?", a: "Ja, Haustiere sind bei Roma284 jederzeit willkommen, ohne Zusatzkosten." },
    ] },
    { category: "Check-in und Check-out", items: [
      { q: "Um wie viel Uhr kann ich einchecken?", a: "Der Check-in ist ab 15:00 Uhr. Bei einer Direktbuchung können wir flexible Zeiten passend zu Ihrer Ankunft vereinbaren." },
      { q: "Wann muss ich die Wohnung verlassen?", a: "Der Check-out ist bis 10:00 Uhr. Bei besonderen Anliegen schreiben Sie uns und wir suchen eine Lösung." },
      { q: "Wie funktioniert der Zugang?", a: "Die Wohnung liegt im Erdgeschoss, mit direktem, ebenerdigem Zugang ohne Treppen. Wir geben Ihnen alle Anweisungen vor der Ankunft." },
      { q: "Kann ich mein Gepäck vor dem Check-in abgeben?", a: "Kontaktieren Sie uns im Voraus: Wo möglich, versuchen wir, Wünschen zur Gepäckaufbewahrung entgegenzukommen." },
    ] },
    { category: "Ausstattung und Komfort", items: [
      { q: "Wie ist das WLAN?", a: "Die Wohnung verfügt über Glasfaser-WLAN mit 1 Gbit/s und einen eigenen Arbeitsplatz: perfekt für Videoanrufe und Homeoffice." },
      { q: "Ist die Küche ausgestattet?", a: "Ja, die offene Küche verfügt über Induktionskochfeld, Kombi-Backofen, Geschirrspüler, Kühlschrank mit Gefrierfach und eine Nespresso-Kaffeemaschine mit Gratis-Kapseln." },
      { q: "Gibt es eine Klimaanlage?", a: "Ja, die Wohnung hat eine Klimaanlage mit Heiz-/Kühlfunktion und eine autonome Heizung." },
      { q: "Gibt es Waschmaschine und Trockner?", a: "Ja, ein multifunktionaler Waschtrockner steht zur Verfügung." },
      { q: "Gibt es einen Außenbereich?", a: "Ja, einen möblierten privaten Patio am ruhigen Innenhof, perfekt für das Frühstück oder einen Aperitif." },
      { q: "Werden Bettwäsche und Handtücher gestellt?", a: "Ja, hochwertige Bettwäsche mit Memory-Foam-Topper und Handtücher sind inbegriffen." },
    ] },
    { category: "Lage und Verkehr", items: [
      { q: "Wo genau liegt die Wohnung?", a: "In der Via Roma 284, im historischen Zentrum von Piacenza. Die Piazza Cavalli und der Dom sind 350 Meter entfernt (5 Gehminuten)." },
      { q: "Wie weit ist der Bahnhof entfernt?", a: "Der Bahnhof Piacenza ist 900 Meter entfernt, etwa 9 Gehminuten." },
      { q: "Wie lange dauert es nach Mailand?", a: "Mailand Centrale ist mit dem Frecciarossa in 33 Minuten erreichbar, mit bis zu 52 Direktzügen pro Tag (erster 06:07, letzter 23:52)." },
      { q: "Wie erreiche ich die Messe Rho?", a: "Mit dem Frecciarossa bis Mailand Centrale, dann mit der Metro M2 bis Cadorna und Umstieg in die M1 bis Rho Fieramilano, in insgesamt etwa eineinhalb Stunden." },
      { q: "Gibt es einen Parkplatz?", a: "In der Via Roma gibt es Parkplätze mit blauen Linien, tagsüber kostenpflichtig und ab 19 Uhr kostenlos. Rund 300 Meter entfernt gibt es zudem den bewachten Parkplatz Urban Center Parking in der Stradone Farnese 126." },
    ] },
    { category: "Zahlungen", items: [
      { q: "Wie kann ich bezahlen?", a: "Die Zahlung erfolgt sicher über das Buchungssystem der Website." },
      { q: "Gibt es Preise oder Kostenvoranschläge?", a: "Die Preise werden je nach gewählten Daten im Buchungskalender angezeigt. Für besondere Anfragen schreiben Sie uns." },
      { q: "Ist eine Kaution erforderlich?", a: "Etwaige Details zu Kaution und Bedingungen werden bei der Buchung mitgeteilt." },
    ] },
    { category: "Stornierung", items: [
      { q: "Kann ich meine Buchung stornieren?", a: "Die Stornobedingungen hängen von Ihren Daten und dem gewählten Tarif ab und werden bei der Buchung angezeigt." },
      { q: "Was, wenn ich meine Daten ändern muss?", a: "Kontaktieren Sie uns so früh wie möglich: Wo Verfügbarkeit besteht, kommen wir Ihnen stets entgegen." },
    ] },
  ],
  es: [
    { category: "Reserva", items: [
      { q: "¿Cómo reservo Roma284?", a: "Puedes reservar directamente en la web, en la página Reservar, eligiendo las fechas en el calendario. Recibes la confirmación inmediata por correo electrónico." },
      { q: "¿Por qué conviene reservar directamente?", a: "Reservando directamente evitas las comisiones de las plataformas de reserva y normalmente pagas hasta un 15 % menos por la misma estancia. Además tienes contacto directo con nosotros, check-in flexible bajo petición y confirmación inmediata." },
      { q: "¿Puedo reservar para una sola noche?", a: "La estancia mínima puede variar según la temporada. Escríbenos por WhatsApp y comprobamos enseguida la disponibilidad para tus fechas." },
      { q: "¿Cuántas personas puedo alojar?", a: "El apartamento aloja hasta 4 personas: cama de matrimonio (separable en dos individuales) y dos sillones cama individuales en el salón." },
      { q: "¿Puedo llevar a mi mascota?", a: "Sí, las mascotas son siempre bienvenidas en Roma284, sin coste adicional." },
    ] },
    { category: "Check-in y check-out", items: [
      { q: "¿A qué hora puedo hacer el check-in?", a: "El check-in es a partir de las 15:00. Reservando directamente podemos acordar horarios flexibles según tu llegada." },
      { q: "¿A qué hora debo dejar el apartamento?", a: "El check-out es antes de las 10:00. Para necesidades especiales, escríbenos y buscamos una solución." },
      { q: "¿Cómo funciona la entrada?", a: "El apartamento está en la planta baja, con acceso directo y sin escaleras. Te facilitamos todas las instrucciones antes de la llegada." },
      { q: "¿Puedo dejar el equipaje antes del check-in?", a: "Contáctanos con antelación: cuando es posible, intentamos atender las necesidades de consigna de equipaje." },
    ] },
    { category: "Servicios y comodidades", items: [
      { q: "¿Cómo es la conexión Wi-Fi?", a: "El apartamento dispone de Wi-Fi de fibra de 1 Gbit/s con un espacio de trabajo dedicado: perfecto para videollamadas y teletrabajo." },
      { q: "¿La cocina está equipada?", a: "Sí, la cocina abierta cuenta con placa de inducción, horno combinado, lavavajillas, frigorífico con congelador y cafetera Nespresso con cápsulas de regalo." },
      { q: "¿Hay aire acondicionado?", a: "Sí, el apartamento tiene climatización frío/calor y calefacción autónoma." },
      { q: "¿Hay lavadora y secadora?", a: "Sí, hay una lavadora-secadora multifunción disponible." },
      { q: "¿Hay un espacio al aire libre?", a: "Sí, un patio privado amueblado en el tranquilo patio interior, perfecto para el desayuno o un aperitivo." },
      { q: "¿Se proporcionan sábanas y toallas?", a: "Sí, se incluyen ropa de cama de calidad con topper de espuma viscoelástica y toallas." },
    ] },
    { category: "Ubicación y transporte", items: [
      { q: "¿Dónde se encuentra exactamente el apartamento?", a: "En Via Roma 284, en el centro histórico de Piacenza. Piazza Cavalli y el Duomo están a 350 metros (5 minutos a pie)." },
      { q: "¿A qué distancia está la estación?", a: "La estación de Piacenza está a 900 metros, unos 9 minutos a pie." },
      { q: "¿Cuánto se tarda a Milán?", a: "Milán Centrale está a 33 minutos en Frecciarossa, con hasta 52 trenes directos al día (primero 06:07, último 23:52)." },
      { q: "¿Cómo llego a la Feria de Rho?", a: "Con el Frecciarossa hasta Milán Centrale, luego el metro M2 hasta Cadorna y cambio a la M1 hasta Rho Fieramilano, en aproximadamente una hora y media en total." },
      { q: "¿Hay aparcamiento?", a: "En Via Roma el aparcamiento es en línea azul, de pago durante el día y gratuito a partir de las 19. A unos 300 metros está también el aparcamiento vigilado Urban Center Parking, en Stradone Farnese 126." },
    ] },
    { category: "Pagos", items: [
      { q: "¿Cómo puedo pagar?", a: "El pago se realiza de forma segura a través del sistema de reservas de la web." },
      { q: "¿Facilitáis precios o presupuestos?", a: "Las tarifas se muestran en el calendario de reserva según las fechas elegidas. Para solicitudes especiales, escríbenos." },
      { q: "¿Se requiere una fianza?", a: "Cualquier detalle sobre la fianza y las condiciones se comunica en el momento de la reserva." },
    ] },
    { category: "Cancelación", items: [
      { q: "¿Puedo cancelar la reserva?", a: "Las condiciones de cancelación dependen de las fechas y de la tarifa elegida y se indican en el momento de la reserva." },
      { q: "¿Qué ocurre si necesito cambiar las fechas?", a: "Contáctanos lo antes posible: cuando hay disponibilidad, siempre intentamos ayudarte." },
    ] },
  ],
  pt: [
    { category: "Reserva", items: [
      { q: "Como reservo o Roma284?", a: "Pode reservar diretamente no site, na página Reservar, escolhendo as datas no calendário. Recebe a confirmação imediata por e-mail." },
      { q: "Porque é melhor reservar diretamente?", a: "Ao reservar diretamente, evita as comissões das plataformas de reserva e normalmente paga até 15% menos pela mesma estadia. Além disso, tem contacto direto connosco, check-in flexível a pedido e confirmação imediata." },
      { q: "Posso reservar apenas para uma noite?", a: "A estadia mínima pode variar consoante a época. Escreva-nos pelo WhatsApp e verificamos de imediato a disponibilidade para as suas datas." },
      { q: "Quantas pessoas posso acolher?", a: "O apartamento acolhe até 4 pessoas: cama de casal (separável em duas individuais) e dois cadeirões-cama individuais na sala." },
      { q: "Posso levar o meu animal de estimação?", a: "Sim, os animais de estimação são sempre bem-vindos no Roma284, sem custos adicionais." },
    ] },
    { category: "Check-in e check-out", items: [
      { q: "A que horas posso fazer o check-in?", a: "O check-in é a partir das 15:00. Ao reservar diretamente, podemos combinar horários flexíveis consoante a sua chegada." },
      { q: "A que horas devo deixar o apartamento?", a: "O check-out é até às 10:00. Para necessidades especiais, escreva-nos e procuramos uma solução." },
      { q: "Como funciona a entrada?", a: "O apartamento fica no rés-do-chão, com acesso direto e sem escadas. Fornecemos todas as instruções antes da chegada." },
      { q: "Posso deixar a bagagem antes do check-in?", a: "Contacte-nos com antecedência: sempre que possível, procuramos responder às necessidades de depósito de bagagem." },
    ] },
    { category: "Serviços e conforto", items: [
      { q: "Como é a ligação Wi-Fi?", a: "O apartamento tem Wi-Fi de fibra de 1 Gbit/s com um espaço de trabalho dedicado: perfeito para videochamadas e teletrabalho." },
      { q: "A cozinha está equipada?", a: "Sim, a cozinha aberta tem placa de indução, forno combinado, máquina de lavar loiça, frigorífico com congelador e máquina de café Nespresso com cápsulas oferecidas." },
      { q: "Há ar condicionado?", a: "Sim, o apartamento tem climatização quente/frio e aquecimento autónomo." },
      { q: "Há máquina de lavar e secar roupa?", a: "Sim, está disponível uma máquina de lavar e secar multifunções." },
      { q: "Existe um espaço ao ar livre?", a: "Sim, um pátio privado mobilado no tranquilo pátio interior, perfeito para o pequeno-almoço ou um aperitivo." },
      { q: "São fornecidos lençóis e toalhas?", a: "Sim, estão incluídos roupa de cama de qualidade com topper em espuma viscoelástica e toalhas." },
    ] },
    { category: "Localização e transportes", items: [
      { q: "Onde fica exatamente o apartamento?", a: "Na Via Roma 284, no centro histórico de Piacenza. A Piazza Cavalli e o Duomo ficam a 350 metros (5 minutos a pé)." },
      { q: "A que distância fica a estação?", a: "A estação de Piacenza fica a 900 metros, cerca de 9 minutos a pé." },
      { q: "Quanto tempo demora até Milão?", a: "Milão Centrale fica a 33 minutos de Frecciarossa, com até 52 comboios diretos por dia (primeiro 06:07, último 23:52)." },
      { q: "Como chego à Feira de Rho?", a: "De Frecciarossa até Milão Centrale, depois o metro M2 até Cadorna e mudança para a M1 até Rho Fieramilano, em cerca de uma hora e meia no total." },
      { q: "Há estacionamento?", a: "Na Via Roma o estacionamento é em linhas azuis, pago durante o dia e gratuito a partir das 19h. A cerca de 300 metros há também o parque vigiado Urban Center Parking, no Stradone Farnese 126." },
    ] },
    { category: "Pagamentos", items: [
      { q: "Como posso pagar?", a: "O pagamento é feito de forma segura através do sistema de reservas do site." },
      { q: "Fornecem preços ou orçamentos?", a: "As tarifas são apresentadas no calendário de reserva consoante as datas escolhidas. Para pedidos especiais, escreva-nos." },
      { q: "É exigida uma caução?", a: "Eventuais detalhes sobre caução e condições são comunicados no momento da reserva." },
    ] },
    { category: "Cancelamento", items: [
      { q: "Posso cancelar a reserva?", a: "As condições de cancelamento dependem das datas e da tarifa escolhida e são indicadas no momento da reserva." },
      { q: "O que acontece se precisar de alterar as datas?", a: "Contacte-nos o mais cedo possível: havendo disponibilidade, procuramos sempre ajudá-lo." },
    ] },
  ],
  nl: [
    { category: "Reserveren", items: [
      { q: "Hoe boek ik Roma284?", a: "Je kunt rechtstreeks via de site boeken op de pagina Boeken, door je data in de kalender te kiezen. Je ontvangt direct een bevestiging per e-mail." },
      { q: "Waarom is direct boeken beter?", a: "Bij een directe boeking vermijd je de commissies van de boekingsplatforms en betaal je meestal tot 15% minder voor hetzelfde verblijf. Bovendien heb je direct contact met ons, flexibele check-in op verzoek en directe bevestiging." },
      { q: "Kan ik voor één nacht boeken?", a: "De minimale verblijfsduur kan per seizoen verschillen. Stuur ons een bericht via WhatsApp en we controleren meteen de beschikbaarheid voor jouw data." },
      { q: "Voor hoeveel personen kan ik boeken?", a: "Het appartement biedt plaats aan maximaal 4 personen: een tweepersoonsbed (te splitsen in twee eenpersoonsbedden) en twee eenpersoons slaapfauteuils in de woonkamer." },
      { q: "Mag ik mijn huisdier meenemen?", a: "Ja, huisdieren zijn altijd welkom in Roma284, zonder extra kosten." },
    ] },
    { category: "Check-in en check-out", items: [
      { q: "Hoe laat kan ik inchecken?", a: "Check-in is vanaf 15:00 uur. Bij een directe boeking kunnen we flexibele tijden afspreken die bij jouw aankomst passen." },
      { q: "Hoe laat moet ik het appartement verlaten?", a: "Check-out is vóór 10:00 uur. Voor bijzondere wensen, schrijf ons en we zoeken een oplossing." },
      { q: "Hoe werkt de toegang?", a: "Het appartement ligt op de begane grond, met directe, gelijkvloerse toegang zonder trappen. We geven alle instructies vóór aankomst." },
      { q: "Kan ik mijn bagage vóór de check-in afgeven?", a: "Neem vooraf contact met ons op: waar mogelijk proberen we tegemoet te komen aan wensen voor bagageopslag." },
    ] },
    { category: "Voorzieningen en comfort", items: [
      { q: "Hoe is de wifi?", a: "Het appartement heeft glasvezel-wifi van 1 Gbit/s met een eigen werkplek: perfect voor videogesprekken en thuiswerken." },
      { q: "Is de keuken uitgerust?", a: "Ja, de open keuken heeft een inductiekookplaat, combi-oven, vaatwasser, koelkast met vriesvak en een Nespresso-koffiemachine met gratis capsules." },
      { q: "Is er airconditioning?", a: "Ja, het appartement heeft airconditioning warm/koud en een eigen verwarming." },
      { q: "Zijn er een wasmachine en droger?", a: "Ja, er is een multifunctionele was-droogcombinatie beschikbaar." },
      { q: "Is er een buitenruimte?", a: "Ja, een gemeubileerde privépatio op de rustige binnenplaats, perfect voor het ontbijt of een aperitief." },
      { q: "Worden beddengoed en handdoeken verstrekt?", a: "Ja, kwaliteitsbeddengoed met een memory-foam topper en handdoeken zijn inbegrepen." },
    ] },
    { category: "Ligging en vervoer", items: [
      { q: "Waar ligt het appartement precies?", a: "Aan de Via Roma 284, in het historische centrum van Piacenza. Piazza Cavalli en de Dom liggen op 350 meter (5 minuten lopen)." },
      { q: "Hoe ver is het station?", a: "Het station van Piacenza ligt op 900 meter, ongeveer 9 minuten lopen." },
      { q: "Hoe lang duurt het naar Milaan?", a: "Milaan Centrale ligt op 33 minuten met de Frecciarossa, met tot 52 directe treinen per dag (eerste 06:07, laatste 23:52)." },
      { q: "Hoe bereik ik de beurs van Rho?", a: "Met de Frecciarossa tot Milaan Centrale, dan de metro M2 tot Cadorna en overstappen op de M1 tot Rho Fieramilano, in totaal ongeveer anderhalf uur." },
      { q: "Is er parkeergelegenheid?", a: "In de Via Roma is parkeren op blauwe lijnen, overdag betaald en gratis na 19 uur. Op ongeveer 300 meter is er ook de bewaakte parkeergarage Urban Center Parking, aan de Stradone Farnese 126." },
    ] },
    { category: "Betalingen", items: [
      { q: "Hoe kan ik betalen?", a: "De betaling verloopt veilig via het boekingssysteem van de site." },
      { q: "Geven jullie prijzen of offertes?", a: "De tarieven worden in de boekingskalender getoond op basis van de gekozen data. Voor bijzondere verzoeken, schrijf ons." },
      { q: "Is een borg vereist?", a: "Eventuele details over borg en voorwaarden worden bij de boeking meegedeeld." },
    ] },
    { category: "Annulering", items: [
      { q: "Kan ik mijn boeking annuleren?", a: "De annuleringsvoorwaarden hangen af van je data en het gekozen tarief en worden bij de boeking getoond." },
      { q: "Wat als ik mijn data moet wijzigen?", a: "Neem zo snel mogelijk contact met ons op: waar er beschikbaarheid is, proberen we je altijd tegemoet te komen." },
    ] },
  ],
  pl: [
    { category: "Rezerwacja", items: [
      { q: "Jak zarezerwować Roma284?", a: "Możesz zarezerwować bezpośrednio na stronie, na podstronie Rezerwacja, wybierając daty w kalendarzu. Otrzymasz natychmiastowe potwierdzenie e-mailem." },
      { q: "Dlaczego warto rezerwować bezpośrednio?", a: "Rezerwując bezpośrednio, unikasz prowizji platform rezerwacyjnych i zwykle płacisz nawet do 15% mniej za ten sam pobyt. Masz też bezpośredni kontakt z nami, elastyczne zameldowanie na życzenie i natychmiastowe potwierdzenie." },
      { q: "Czy mogę zarezerwować tylko na jedną noc?", a: "Minimalny pobyt może się różnić w zależności od sezonu. Napisz do nas na WhatsApp, a od razu sprawdzimy dostępność dla Twoich dat." },
      { q: "Ile osób mogę zameldować?", a: "Apartament pomieści do 4 osób: łóżko podwójne (rozdzielane na dwa pojedyncze) i dwa pojedyncze fotele rozkładane w salonie." },
      { q: "Czy mogę przyjechać ze zwierzęciem?", a: "Tak, zwierzęta są zawsze mile widziane w Roma284, bez dodatkowych opłat." },
    ] },
    { category: "Zameldowanie i wymeldowanie", items: [
      { q: "O której mogę się zameldować?", a: "Zameldowanie od godziny 15:00. Rezerwując bezpośrednio, możemy ustalić elastyczne godziny dopasowane do Twojego przyjazdu." },
      { q: "O której muszę opuścić apartament?", a: "Wymeldowanie do godziny 10:00. W przypadku szczególnych potrzeb napisz do nas, a poszukamy rozwiązania." },
      { q: "Jak działa wejście?", a: "Apartament znajduje się na parterze, z bezpośrednim wejściem bez schodów. Wszystkie instrukcje przekazujemy przed przyjazdem." },
      { q: "Czy mogę zostawić bagaż przed zameldowaniem?", a: "Skontaktuj się z nami wcześniej: w miarę możliwości staramy się wyjść naprzeciw potrzebom przechowania bagażu." },
    ] },
    { category: "Udogodnienia i komfort", items: [
      { q: "Jakie jest Wi-Fi?", a: "Apartament ma światłowodowe Wi-Fi 1 Gb/s z wydzielonym miejscem do pracy: idealne do wideorozmów i pracy zdalnej." },
      { q: "Czy kuchnia jest wyposażona?", a: "Tak, otwarta kuchnia ma płytę indukcyjną, piekarnik kombinowany, zmywarkę, lodówkę z zamrażalnikiem oraz ekspres Nespresso z kapsułkami gratis." },
      { q: "Czy jest klimatyzacja?", a: "Tak, apartament ma klimatyzację grzanie/chłodzenie i niezależne ogrzewanie." },
      { q: "Czy są pralka i suszarka?", a: "Tak, dostępna jest wielofunkcyjna pralko-suszarka." },
      { q: "Czy jest przestrzeń na świeżym powietrzu?", a: "Tak, umeblowane prywatne patio na spokojnym wewnętrznym dziedzińcu, idealne na śniadanie lub aperitif." },
      { q: "Czy zapewniona jest pościel i ręczniki?", a: "Tak, w zestawie znajdują się wysokiej jakości pościel z nakładką z pianki memory oraz ręczniki." },
    ] },
    { category: "Lokalizacja i transport", items: [
      { q: "Gdzie dokładnie znajduje się apartament?", a: "Przy Via Roma 284, w historycznym centrum Piacenzy. Piazza Cavalli i katedra są oddalone o 350 metrów (5 minut spacerem)." },
      { q: "Jak daleko jest dworzec?", a: "Dworzec w Piacenzy jest oddalony o 900 metrów, około 9 minut spacerem." },
      { q: "Ile czasu zajmuje dojazd do Mediolanu?", a: "Mediolan Centrale jest oddalony o 33 minuty Frecciarossą, z nawet 52 bezpośrednimi pociągami dziennie (pierwszy 06:07, ostatni 23:52)." },
      { q: "Jak dotrzeć na targi w Rho?", a: "Frecciarossą do Mediolanu Centrale, następnie metrem M2 do Cadorny i przesiadka na M1 do Rho Fieramilano, łącznie około półtorej godziny." },
      { q: "Czy jest parking?", a: "Przy Via Roma parkowanie odbywa się w niebieskiej strefie, płatne w ciągu dnia i bezpłatne po 19:00. Około 300 metrów dalej znajduje się także strzeżony parking Urban Center Parking przy Stradone Farnese 126." },
    ] },
    { category: "Płatności", items: [
      { q: "Jak mogę zapłacić?", a: "Płatność odbywa się w bezpieczny sposób przez system rezerwacji na stronie." },
      { q: "Czy podajecie ceny lub wyceny?", a: "Stawki są wyświetlane w kalendarzu rezerwacji na podstawie wybranych dat. W przypadku szczególnych próśb napisz do nas." },
      { q: "Czy wymagana jest kaucja?", a: "Ewentualne szczegóły dotyczące kaucji i warunków są przekazywane przy rezerwacji." },
    ] },
    { category: "Anulowanie", items: [
      { q: "Czy mogę anulować rezerwację?", a: "Warunki anulowania zależą od dat i wybranej stawki i są podawane przy rezerwacji." },
      { q: "Co jeśli muszę zmienić daty?", a: "Skontaktuj się z nami jak najszybciej: jeśli jest dostępność, zawsze staramy się wyjść Ci naprzeciw." },
    ] },
  ],
  sv: [
    { category: "Bokning", items: [
      { q: "Hur bokar jag Roma284?", a: "Du kan boka direkt på webbplatsen via sidan Boka, genom att välja datum i kalendern. Du får omedelbar bekräftelse via e-post." },
      { q: "Varför är det bättre att boka direkt?", a: "Vid direktbokning slipper du bokningsplattformarnas avgifter och betalar oftast upp till 15 % mindre för samma vistelse. Du får också direktkontakt med oss, flexibel incheckning på begäran och omedelbar bekräftelse." },
      { q: "Kan jag boka för bara en natt?", a: "Minsta vistelse kan variera med säsong. Skriv till oss på WhatsApp så kollar vi tillgängligheten för dina datum direkt." },
      { q: "Hur många personer kan jag boka för?", a: "Lägenheten rymmer upp till 4 personer: en dubbelsäng (delbar i två enkelsängar) och två enkla bäddfåtöljer i vardagsrummet." },
      { q: "Kan jag ta med mitt husdjur?", a: "Ja, husdjur är alltid välkomna på Roma284, utan extra kostnad." },
    ] },
    { category: "In- och utcheckning", items: [
      { q: "Vilken tid kan jag checka in?", a: "Incheckning sker från 15:00. Vid direktbokning kan vi komma överens om flexibla tider efter din ankomst." },
      { q: "Vilken tid måste jag lämna lägenheten?", a: "Utcheckning senast 10:00. Vid särskilda behov, skriv till oss så letar vi efter en lösning." },
      { q: "Hur fungerar entrén?", a: "Lägenheten ligger i bottenvåningen, med direkt entré utan trappor. Vi ger alla instruktioner före ankomst." },
      { q: "Kan jag lämna bagaget före incheckning?", a: "Kontakta oss i förväg: när det är möjligt försöker vi tillmötesgå behov av bagageförvaring." },
    ] },
    { category: "Bekvämligheter och komfort", items: [
      { q: "Hur är Wi-Fi:t?", a: "Lägenheten har fiber-Wi-Fi på 1 Gbit/s med en egen arbetsplats: perfekt för videosamtal och distansarbete." },
      { q: "Är köket utrustat?", a: "Ja, köket i öppen planlösning har induktionshäll, kombiugn, diskmaskin, kylskåp med frys och en Nespresso-kaffemaskin med kapslar utan kostnad." },
      { q: "Finns det luftkonditionering?", a: "Ja, lägenheten har luftkonditionering för värme/kyla och egen uppvärmning." },
      { q: "Finns det tvätt- och torkmaskin?", a: "Ja, en kombinerad tvätt- och torkmaskin finns tillgänglig." },
      { q: "Finns det en uteplats?", a: "Ja, en möblerad privat uteplats mot den lugna inre gården, perfekt för frukost eller en aperitif." },
      { q: "Ingår sänglinne och handdukar?", a: "Ja, sänglinne av hög kvalitet med memory foam-bäddmadrass och handdukar ingår." },
    ] },
    { category: "Läge och transport", items: [
      { q: "Var ligger lägenheten exakt?", a: "På Via Roma 284, i Piacenzas historiska centrum. Piazza Cavalli och domkyrkan ligger 350 meter bort (5 minuters promenad)." },
      { q: "Hur långt är det till stationen?", a: "Piacenzas station ligger 900 meter bort, cirka 9 minuters promenad." },
      { q: "Hur lång tid tar det till Milano?", a: "Milano Centrale ligger 33 minuter bort med Frecciarossa, med upp till 52 direkttåg om dagen (första 06:07, sista 23:52)." },
      { q: "Hur når jag mässan i Rho?", a: "Med Frecciarossa till Milano Centrale, sedan tunnelbana M2 till Cadorna och byte till M1 till Rho Fieramilano, på sammanlagt cirka en och en halv timme." },
      { q: "Finns det parkering?", a: "På Via Roma sker parkering i blå zon, avgiftsbelagd dagtid och gratis efter 19. Cirka 300 meter bort finns även det bevakade Urban Center Parking, på Stradone Farnese 126." },
    ] },
    { category: "Betalningar", items: [
      { q: "Hur kan jag betala?", a: "Betalningen sker säkert via webbplatsens bokningssystem." },
      { q: "Ger ni priser eller offerter?", a: "Priserna visas i bokningskalendern utifrån dina valda datum. Vid särskilda önskemål, skriv till oss." },
      { q: "Krävs en deposition?", a: "Eventuella uppgifter om deposition och villkor meddelas vid bokningen." },
    ] },
    { category: "Avbokning", items: [
      { q: "Kan jag avboka min bokning?", a: "Avbokningsvillkoren beror på dina datum och valt pris och visas vid bokningen." },
      { q: "Vad händer om jag behöver ändra datum?", a: "Kontakta oss så snart som möjligt: när det finns tillgänglighet försöker vi alltid tillmötesgå dig." },
    ] },
  ],
  ja: [
    { category: "予約", items: [
      { q: "Roma284はどうやって予約しますか？", a: "予約ページからカレンダーで日付を選び、サイトで直接予約できます。メールで即時確認が届きます。" },
      { q: "なぜ直接予約する方が良いのですか？", a: "直接予約すれば、予約プラットフォームの手数料を避けられ、同じ滞在で通常最大15％安くなります。さらに、私たちと直接やり取りでき、ご希望に応じた柔軟なチェックインと即時確認が得られます。" },
      { q: "1泊だけ予約できますか？", a: "最低宿泊日数はシーズンによって異なる場合があります。WhatsAppでご連絡いただければ、ご希望の日付の空き状況をすぐに確認します。" },
      { q: "何名まで予約できますか？", a: "最大4名まで宿泊できます。ダブルベッド（シングル2台に分割可能）とリビングのシングルのソファベッド2台があります。" },
      { q: "ペットを連れて行けますか？", a: "はい、Roma284ではペットはいつでも追加料金なしで歓迎です。" },
    ] },
    { category: "チェックインとチェックアウト", items: [
      { q: "何時にチェックインできますか？", a: "チェックインは15:00からです。直接予約の場合、ご到着に合わせて柔軟な時間を調整できます。" },
      { q: "何時にアパートメントを出る必要がありますか？", a: "チェックアウトは10:00までです。特別なご要望がある場合は、ご連絡いただければ解決策を探します。" },
      { q: "入口はどうなっていますか？", a: "アパートメントは1階にあり、段差のない直接入口です。ご到着前にすべての案内をお伝えします。" },
      { q: "チェックイン前に荷物を預けられますか？", a: "事前にご連絡ください。可能な場合は荷物保管のご要望にお応えするよう努めます。" },
    ] },
    { category: "設備と快適性", items: [
      { q: "Wi-Fiはどうですか？", a: "アパートメントには専用ワークスペース付きの1Gbps光Wi-Fiがあります。ビデオ通話やリモートワークに最適です。" },
      { q: "キッチンは設備が整っていますか？", a: "はい、オープンキッチンにはIHコンロ、コンビオーブン、食器洗い機、冷凍庫付き冷蔵庫、無料カプセル付きネスプレッソコーヒーマシンがあります。" },
      { q: "エアコンはありますか？", a: "はい、アパートメントには冷暖房エアコンと独立した暖房があります。" },
      { q: "洗濯機と乾燥機はありますか？", a: "はい、多機能洗濯乾燥機が利用できます。" },
      { q: "屋外スペースはありますか？", a: "はい、静かな内庭に面した家具付き専用パティオがあり、朝食やアペリティーボに最適です。" },
      { q: "リネンとタオルは提供されますか？", a: "はい、メモリーフォームのトッパー付きの上質な寝具とタオルが含まれています。" },
    ] },
    { category: "立地と交通", items: [
      { q: "アパートメントはどこにありますか？", a: "ピアチェンツァの歴史地区、Via Roma 284にあります。カヴァッリ広場と大聖堂は350メートル（徒歩5分）の距離です。" },
      { q: "駅までどのくらいの距離ですか？", a: "ピアチェンツァ駅は900メートル、徒歩約9分です。" },
      { q: "ミラノまでどのくらいかかりますか？", a: "ミラノ中央駅はフレッチャロッサで33分、1日最大52本の直通列車があります（始発6:07、最終23:52）。" },
      { q: "ローの見本市会場へはどう行きますか？", a: "フレッチャロッサでミラノ中央駅へ、その後地下鉄M2でカドルナまで、M1に乗り換えてRho Fieramilanoまで、合計で約1時間半です。" },
      { q: "駐車場はありますか？", a: "Via Romaでは青線ゾーンでの駐車となり、日中は有料、19時以降は無料です。約300メートル先には、Stradone Farnese 126にある管理駐車場Urban Center Parkingもあります。" },
    ] },
    { category: "お支払い", items: [
      { q: "どうやって支払えますか？", a: "お支払いはサイトの予約システムを通じて安全に行われます。" },
      { q: "料金や見積もりは提供していますか？", a: "料金は選択した日付に基づき予約カレンダーに表示されます。特別なご要望は、ご連絡ください。" },
      { q: "保証金は必要ですか？", a: "保証金や条件に関する詳細は予約時にお知らせします。" },
    ] },
    { category: "キャンセル", items: [
      { q: "予約をキャンセルできますか？", a: "キャンセル条件は日付と選択した料金によって異なり、予約時に表示されます。" },
      { q: "日付を変更する必要がある場合はどうなりますか？", a: "できるだけ早くご連絡ください。空きがある場合は、常にご要望にお応えするよう努めます。" },
    ] },
  ],
  "zh-cn": [
    { category: "预订", items: [
      { q: "如何预订Roma284？", a: "您可以在网站的「预订」页面直接预订，在日历上选择日期。您将通过电子邮件即时收到确认。" },
      { q: "为什么直接预订更好？", a: "直接预订可避开预订平台的佣金，同样的住宿通常可节省最多15%。此外，您还能与我们直接联系、应要求灵活入住，并即时获得确认。" },
      { q: "我可以只预订一晚吗？", a: "最短住宿天数可能因季节而异。请通过WhatsApp联系我们，我们会立即为您查询所选日期的空房情况。" },
      { q: "我最多可以预订几人？", a: "公寓最多可入住4人：一张双人床（可分为两张单人床）和客厅的两张单人沙发床。" },
      { q: "我可以带宠物吗？", a: "可以，Roma284始终欢迎宠物，且不收取额外费用。" },
    ] },
    { category: "入住与退房", items: [
      { q: "我几点可以入住？", a: "入住时间为15:00起。直接预订时，我们可根据您的到达时间安排灵活的时间。" },
      { q: "我必须几点离开公寓？", a: "退房时间为10:00前。如有特殊需求，请联系我们，我们会设法找到解决方案。" },
      { q: "入口是如何安排的？", a: "公寓位于一楼，直接入口且无台阶。我们会在您到达前提供所有说明。" },
      { q: "我可以在入住前寄存行李吗？", a: "请提前联系我们：在可能的情况下，我们会尽力满足行李寄存的需求。" },
    ] },
    { category: "设施与舒适", items: [
      { q: "Wi-Fi怎么样？", a: "公寓配有1 Gbit/s光纤Wi-Fi及专属工作区：非常适合视频通话和远程办公。" },
      { q: "厨房设备齐全吗？", a: "是的，开放式厨房设备齐全：电磁炉、组合烤箱、洗碗机、带冷冻室的冰箱，以及附赠胶囊的Nespresso咖啡机。" },
      { q: "有空调吗？", a: "有，公寓配有冷暖空调和独立供暖。" },
      { q: "有洗衣机和烘干机吗？", a: "有，提供一台多功能洗烘一体机。" },
      { q: "有户外空间吗？", a: "有，安静内庭的带家具私人庭院，非常适合早餐或餐前酒。" },
      { q: "提供床单和毛巾吗？", a: "提供，包含带记忆棉床垫的优质床品和毛巾。" },
    ] },
    { category: "位置与交通", items: [
      { q: "公寓具体在哪里？", a: "在皮亚琴察历史中心区的Via Roma 284。卡瓦利广场和大教堂相距350米（步行5分钟）。" },
      { q: "车站有多远？", a: "皮亚琴察车站相距900米，步行约9分钟。" },
      { q: "到米兰需要多久？", a: "乘红箭高铁到米兰中央车站需33分钟，每天最多52班直达列车（首班06:07，末班23:52）。" },
      { q: "如何前往罗会展中心？", a: "乘红箭高铁到米兰中央车站，再乘地铁M2到Cadorna，换乘M1到Rho Fieramilano，全程约一个半小时。" },
      { q: "有停车位吗？", a: "在Via Roma为蓝线区停车，白天收费，19点后免费。约300米处还有有人看管的Urban Center Parking停车场，地址Stradone Farnese 126。" },
    ] },
    { category: "支付", items: [
      { q: "我如何付款？", a: "付款通过网站的预订系统安全完成。" },
      { q: "你们提供价格或报价吗？", a: "费率根据所选日期在预订日历中显示。如有特殊需求，请联系我们。" },
      { q: "需要押金吗？", a: "有关押金和条款的任何细节将在预订时告知。" },
    ] },
    { category: "取消", items: [
      { q: "我可以取消预订吗？", a: "取消条款取决于您的日期和所选费率，并在预订时显示。" },
      { q: "如果我需要更改日期怎么办？", a: "请尽快联系我们：在有空房的情况下，我们始终尽力满足您的需求。" },
    ] },
  ],
};
