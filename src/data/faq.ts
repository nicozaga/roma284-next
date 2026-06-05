import type { Locale } from "@i18n/config";

/**
 * FAQ home — citation-friendly (frasi auto-contenute, dati esatti).
 * Alimentano sia la sezione visibile sia lo schema FAQPage.
 */
export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQ_HOME: Partial<Record<Locale, FaqEntry[]>> = {
  it: [
    { q: "Dove si trova esattamente Roma284?", a: "Roma284 è in Via Roma 284, nel centro storico di Piacenza. Piazza Cavalli e il Duomo sono a 350 metri (5 minuti a piedi) e la stazione di Piacenza a 900 metri (9 minuti a piedi)." },
    { q: "Quanto dista Milano da Roma284?", a: "Milano Centrale è a 33 minuti con il treno Frecciarossa dalla stazione di Piacenza. Ogni giorno ci sono 46-52 treni diretti, dalla prima corsa delle 06:07 all'ultima delle 23:52." },
    { q: "Quante persone può ospitare l'appartamento?", a: "L'appartamento ospita fino a 4 persone: un letto matrimoniale (separabile in due singoli su richiesta) in camera e due poltrone letto singolo in soggiorno." },
    { q: "Com'è la connessione internet per lo smart working?", a: "L'appartamento ha Wi-Fi in fibra da 1 Gbit/s e uno spazio di lavoro dedicato. È pensato per chi lavora da remoto: videochiamate stabili e download veloci senza interruzioni." },
    { q: "C'è un parcheggio?", a: "In Via Roma il parcheggio è su strisce blu (a pagamento di giorno, gratuito dopo le 19). A circa 300 metri c'è anche un parcheggio custodito, Urban Center Parking in Stradone Farnese 126. L'ingresso all'appartamento è al piano terra, senza scale." },
    { q: "Posso portare il mio animale domestico?", a: "Sì, gli animali domestici sono sempre benvenuti a Roma284, senza costi aggiuntivi. Il patio privato sul cortile interno è comodo anche per chi viaggia con il cane." },
    { q: "A che ora sono il check-in e il check-out?", a: "Il check-in è dalle 15:00 e il check-out entro le 10:00. Prenotando in diretta possiamo concordare orari flessibili in base al tuo viaggio." },
    { q: "L'appartamento ha una cucina attrezzata?", a: "Sì, la cucina open space è completamente attrezzata: piano a induzione a 4 fuochi, forno combinato, lavastoviglie, frigorifero con freezer e macchina caffè Nespresso con cialde omaggio." },
    { q: "C'è uno spazio all'aperto?", a: "Sì, l'appartamento ha un patio privato arredato con tavolo e sedie sul tranquillo cortile interno, perfetto per la colazione al sole o un aperitivo la sera." },
    { q: "Perché conviene prenotare direttamente sul sito?", a: "Prenotando in diretta eviti le commissioni delle piattaforme di prenotazione e di solito paghi fino al 15% in meno per lo stesso soggiorno. In più hai contatto diretto con noi, check-in flessibile su richiesta e conferma immediata via WhatsApp o email." },
    { q: "Roma284 è adatto a chi viaggia per lavoro o per le fiere di Milano?", a: "Sì. Con la Frecciarossa raggiungi Milano Centrale in 33 minuti e da lì la Fiera di Rho con la metropolitana (M2 fino a Cadorna, poi M1). È una base tranquilla e ben collegata per trasferte di lavoro ed eventi." },
  ],
  en: [
    { q: "Where exactly is Roma284?", a: "Roma284 is at Via Roma 284, in the historic centre of Piacenza. Piazza Cavalli and the Cathedral are 350 metres away (5-minute walk) and Piacenza station is 900 metres away (9-minute walk)." },
    { q: "How far is Milan from Roma284?", a: "Milan Centrale is 33 minutes away on the Frecciarossa high-speed train from Piacenza station. There are 46-52 direct trains a day, from the first at 06:07 to the last at 23:52." },
    { q: "How many people can the apartment host?", a: "The apartment hosts up to 4 people: a double bed (splittable into two singles on request) in the bedroom and two single sofa beds in the living room." },
    { q: "What is the internet connection like for remote work?", a: "The apartment has 1 Gbit/s fibre Wi-Fi and a dedicated workspace. It is designed for remote workers: stable video calls and fast downloads without interruptions." },
    { q: "Is there parking?", a: "On Via Roma, parking is on blue lines (paid during the day, free after 7pm). About 300 metres away there's also a guarded car park, Urban Center Parking at Stradone Farnese 126. The apartment entrance is on the ground floor, with no stairs." },
    { q: "Can I bring my pet?", a: "Yes, pets are always welcome at Roma284, at no extra cost. The private patio on the inner courtyard is handy for those travelling with a dog too." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 15:00 and check-out by 10:00. When you book direct, we can arrange flexible times around your trip." },
    { q: "Does the apartment have a fully equipped kitchen?", a: "Yes, the open-plan kitchen is fully equipped: 4-ring induction hob, combi oven, dishwasher, fridge with freezer and a Nespresso coffee machine with complimentary capsules." },
    { q: "Is there an outdoor space?", a: "Yes, the apartment has a furnished private patio with table and chairs on the quiet inner courtyard, perfect for breakfast in the sun or an evening aperitif." },
    { q: "Why is it better to book directly on the website?", a: "Booking direct, you skip the booking platforms' fees and usually pay up to 15% less for the same stay. You also get direct contact with us, flexible check-in on request and instant confirmation by WhatsApp or email." },
    { q: "Is Roma284 suitable for business trips or the Milan fairs?", a: "Yes. The Frecciarossa reaches Milan Centrale in 33 minutes, and from there the Rho fairground by metro (M2 to Cadorna, then M1). It is a quiet, well-connected base for business trips and events." },
  ],
  fr: [
    { q: "Où se trouve exactement Roma284 ?", a: "Roma284 est au Via Roma 284, dans le centre historique de Plaisance. La Piazza Cavalli et la cathédrale sont à 350 mètres (5 minutes à pied) et la gare de Plaisance à 900 mètres (9 minutes à pied)." },
    { q: "À quelle distance se trouve Milan de Roma284 ?", a: "Milan Centrale est à 33 minutes en train Frecciarossa depuis la gare de Plaisance. Il y a 46 à 52 trains directs par jour, du premier à 06h07 au dernier à 23h52." },
    { q: "Combien de personnes l'appartement peut-il accueillir ?", a: "L'appartement accueille jusqu'à 4 personnes : un lit double (séparable en deux lits simples sur demande) dans la chambre et deux fauteuils-lits simples dans le séjour." },
    { q: "Comment est la connexion internet pour le télétravail ?", a: "L'appartement dispose d'un Wi-Fi fibre 1 Gbit/s et d'un espace de travail dédié. Il est pensé pour ceux qui travaillent à distance : visioconférences stables et téléchargements rapides sans interruptions." },
    { q: "Y a-t-il un parking ?", a: "Via Roma, le stationnement se fait sur les lignes bleues (payant le jour, gratuit après 19h). À environ 300 mètres se trouve aussi un parking gardé, Urban Center Parking au Stradone Farnese 126. L'entrée de l'appartement est au rez-de-chaussée, sans escaliers." },
    { q: "Puis-je amener mon animal de compagnie ?", a: "Oui, les animaux sont toujours les bienvenus à Roma284, sans frais supplémentaires. Le patio privé sur la cour intérieure est également pratique pour ceux qui voyagent avec un chien." },
    { q: "Quels sont les horaires de check-in et de check-out ?", a: "Le check-in est à partir de 15h00 et le check-out avant 10h00. En réservant en direct, nous pouvons convenir d'horaires flexibles selon votre voyage." },
    { q: "L'appartement a-t-il une cuisine équipée ?", a: "Oui, la cuisine ouverte est entièrement équipée : plaque à induction à 4 feux, four combiné, lave-vaisselle, réfrigérateur avec congélateur et machine à café Nespresso avec capsules offertes." },
    { q: "Y a-t-il un espace extérieur ?", a: "Oui, l'appartement dispose d'un patio privé meublé avec table et chaises sur la cour intérieure tranquille, parfait pour le petit-déjeuner au soleil ou un apéritif le soir." },
    { q: "Pourquoi vaut-il mieux réserver directement sur le site ?", a: "En réservant en direct, vous évitez les commissions des plateformes de réservation et payez généralement jusqu'à 15 % de moins pour le même séjour. De plus, vous avez un contact direct avec nous, un check-in flexible sur demande et une confirmation immédiate par WhatsApp ou e-mail." },
    { q: "Roma284 convient-il pour les voyages d'affaires ou les foires de Milan ?", a: "Oui. Avec la Frecciarossa, vous rejoignez Milan Centrale en 33 minutes, puis la foire de Rho en métro (M2 jusqu'à Cadorna, puis M1). C'est une base tranquille et bien desservie pour les déplacements professionnels et les événements." },
  ],
  de: [
    { q: "Wo genau liegt Roma284?", a: "Roma284 befindet sich in der Via Roma 284, im historischen Zentrum von Piacenza. Die Piazza Cavalli und der Dom sind 350 Meter entfernt (5 Gehminuten) und der Bahnhof Piacenza 900 Meter (9 Gehminuten)." },
    { q: "Wie weit ist Mailand von Roma284 entfernt?", a: "Mailand Centrale ist mit dem Frecciarossa vom Bahnhof Piacenza in 33 Minuten erreichbar. Täglich verkehren 46–52 Direktzüge, vom ersten um 06:07 bis zum letzten um 23:52 Uhr." },
    { q: "Für wie viele Personen ist die Wohnung geeignet?", a: "Die Wohnung bietet Platz für bis zu 4 Personen: ein Doppelbett (auf Wunsch in zwei Einzelbetten teilbar) im Schlafzimmer und zwei Einzel-Schlafsessel im Wohnzimmer." },
    { q: "Wie ist die Internetverbindung für das Homeoffice?", a: "Die Wohnung verfügt über Glasfaser-WLAN mit 1 Gbit/s und einen eigenen Arbeitsplatz. Sie ist ideal für Remote-Arbeit: stabile Videoanrufe und schnelle Downloads ohne Unterbrechungen." },
    { q: "Gibt es einen Parkplatz?", a: "In der Via Roma gibt es Parkplätze mit blauen Linien (tagsüber kostenpflichtig, ab 19 Uhr kostenlos). Rund 300 Meter entfernt gibt es zudem einen bewachten Parkplatz, das Urban Center Parking in der Stradone Farnese 126. Der Wohnungseingang liegt im Erdgeschoss, ohne Treppen." },
    { q: "Darf ich mein Haustier mitbringen?", a: "Ja, Haustiere sind bei Roma284 jederzeit willkommen, ohne Zusatzkosten. Der private Patio am Innenhof ist auch praktisch für Reisende mit Hund." },
    { q: "Wann sind Check-in und Check-out?", a: "Der Check-in ist ab 15:00 Uhr und der Check-out bis 10:00 Uhr. Bei einer Direktbuchung können wir flexible Zeiten passend zu Ihrer Reise vereinbaren." },
    { q: "Hat die Wohnung eine ausgestattete Küche?", a: "Ja, die offene Küche ist voll ausgestattet: Induktionskochfeld mit 4 Platten, Kombi-Backofen, Geschirrspüler, Kühlschrank mit Gefrierfach und Nespresso-Kaffeemaschine mit Gratis-Kapseln." },
    { q: "Gibt es einen Außenbereich?", a: "Ja, die Wohnung hat einen privaten, mit Tisch und Stühlen möblierten Patio am ruhigen Innenhof, perfekt für das Frühstück in der Sonne oder einen Aperitif am Abend." },
    { q: "Warum lohnt sich die Direktbuchung über die Website?", a: "Bei einer Direktbuchung sparen Sie die Gebühren der Buchungsplattformen und zahlen in der Regel bis zu 15 % weniger für denselben Aufenthalt. Außerdem haben Sie direkten Kontakt mit uns, flexiblen Check-in auf Anfrage und eine sofortige Bestätigung per WhatsApp oder E-Mail." },
    { q: "Ist Roma284 für Geschäftsreisen oder die Mailänder Messen geeignet?", a: "Ja. Mit dem Frecciarossa erreichen Sie Mailand Centrale in 33 Minuten und von dort die Messe Rho mit der Metro (M2 bis Cadorna, dann M1). Es ist ein ruhiger, gut angebundener Standort für Geschäftsreisen und Events." },
  ],
  es: [
    { q: "¿Dónde se encuentra exactamente Roma284?", a: "Roma284 está en Via Roma 284, en el centro histórico de Piacenza. Piazza Cavalli y el Duomo están a 350 metros (5 minutos a pie) y la estación de Piacenza a 900 metros (9 minutos a pie)." },
    { q: "¿A qué distancia está Milán de Roma284?", a: "Milán Centrale está a 33 minutos en el tren Frecciarossa desde la estación de Piacenza. Cada día hay entre 46 y 52 trenes directos, desde el primero a las 06:07 hasta el último a las 23:52." },
    { q: "¿Cuántas personas puede alojar el apartamento?", a: "El apartamento aloja hasta 4 personas: una cama de matrimonio (separable en dos individuales bajo petición) en el dormitorio y dos sillones cama individuales en el salón." },
    { q: "¿Cómo es la conexión a internet para el teletrabajo?", a: "El apartamento dispone de Wi-Fi de fibra de 1 Gbit/s y un espacio de trabajo dedicado. Está pensado para quienes trabajan en remoto: videollamadas estables y descargas rápidas sin interrupciones." },
    { q: "¿Hay aparcamiento?", a: "En Via Roma el aparcamiento es en línea azul (de pago durante el día, gratuito a partir de las 19). A unos 300 metros hay también un aparcamiento vigilado, Urban Center Parking en Stradone Farnese 126. La entrada del apartamento está en la planta baja, sin escaleras." },
    { q: "¿Puedo llevar a mi mascota?", a: "Sí, las mascotas son siempre bienvenidas en Roma284, sin coste adicional. El patio privado en el patio interior también resulta cómodo para quienes viajan con perro." },
    { q: "¿A qué hora son el check-in y el check-out?", a: "El check-in es a partir de las 15:00 y el check-out antes de las 10:00. Reservando directamente podemos acordar horarios flexibles según tu viaje." },
    { q: "¿El apartamento tiene una cocina equipada?", a: "Sí, la cocina abierta está totalmente equipada: placa de inducción de 4 fuegos, horno combinado, lavavajillas, frigorífico con congelador y cafetera Nespresso con cápsulas de regalo." },
    { q: "¿Hay un espacio al aire libre?", a: "Sí, el apartamento tiene un patio privado amueblado con mesa y sillas en el tranquilo patio interior, perfecto para desayunar al sol o tomar un aperitivo por la noche." },
    { q: "¿Por qué conviene reservar directamente en la web?", a: "Reservando directamente evitas las comisiones de las plataformas de reserva y normalmente pagas hasta un 15 % menos por la misma estancia. Además tienes contacto directo con nosotros, check-in flexible bajo petición y confirmación inmediata por WhatsApp o correo electrónico." },
    { q: "¿Es Roma284 adecuado para viajes de negocios o las ferias de Milán?", a: "Sí. Con el Frecciarossa llegas a Milán Centrale en 33 minutos y desde allí a la Feria de Rho en metro (M2 hasta Cadorna, luego M1). Es una base tranquila y bien comunicada para viajes de trabajo y eventos." },
  ],
  pt: [
    { q: "Onde fica exatamente o Roma284?", a: "O Roma284 fica na Via Roma 284, no centro histórico de Piacenza. A Piazza Cavalli e o Duomo ficam a 350 metros (5 minutos a pé) e a estação de Piacenza a 900 metros (9 minutos a pé)." },
    { q: "A que distância fica Milão do Roma284?", a: "Milão Centrale fica a 33 minutos no comboio Frecciarossa a partir da estação de Piacenza. Há 46 a 52 comboios diretos por dia, do primeiro às 06:07 ao último às 23:52." },
    { q: "Quantas pessoas pode acolher o apartamento?", a: "O apartamento acolhe até 4 pessoas: uma cama de casal (separável em duas individuais a pedido) no quarto e dois cadeirões-cama individuais na sala." },
    { q: "Como é a ligação à internet para o teletrabalho?", a: "O apartamento tem Wi-Fi de fibra de 1 Gbit/s e um espaço de trabalho dedicado. Foi pensado para quem trabalha à distância: videochamadas estáveis e downloads rápidos sem interrupções." },
    { q: "Há estacionamento?", a: "Na Via Roma o estacionamento é em linhas azuis (pago durante o dia, gratuito a partir das 19h). A cerca de 300 metros há também um parque de estacionamento vigiado, o Urban Center Parking no Stradone Farnese 126. A entrada do apartamento fica no rés-do-chão, sem escadas." },
    { q: "Posso levar o meu animal de estimação?", a: "Sim, os animais de estimação são sempre bem-vindos no Roma284, sem custos adicionais. O pátio privado no pátio interior é também prático para quem viaja com cão." },
    { q: "A que horas são o check-in e o check-out?", a: "O check-in é a partir das 15:00 e o check-out até às 10:00. Ao reservar diretamente, podemos combinar horários flexíveis consoante a sua viagem." },
    { q: "O apartamento tem cozinha equipada?", a: "Sim, a cozinha aberta está totalmente equipada: placa de indução de 4 zonas, forno combinado, máquina de lavar loiça, frigorífico com congelador e máquina de café Nespresso com cápsulas oferecidas." },
    { q: "Existe um espaço ao ar livre?", a: "Sim, o apartamento tem um pátio privado mobilado com mesa e cadeiras no tranquilo pátio interior, perfeito para o pequeno-almoço ao sol ou um aperitivo à noite." },
    { q: "Porque é melhor reservar diretamente no site?", a: "Ao reservar diretamente, evita as comissões das plataformas de reserva e normalmente paga até 15% menos pela mesma estadia. Além disso, tem contacto direto connosco, check-in flexível a pedido e confirmação imediata por WhatsApp ou e-mail." },
    { q: "O Roma284 é adequado para viagens de negócios ou para as feiras de Milão?", a: "Sim. Com o Frecciarossa chega a Milão Centrale em 33 minutos e daí à Feira de Rho de metro (M2 até Cadorna, depois M1). É uma base tranquila e bem servida para deslocações de trabalho e eventos." },
  ],
};
