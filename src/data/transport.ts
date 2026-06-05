import type { Locale } from "@i18n/config";

/** Come arrivare — passi per origine (alimenta HowTo schema + UI). */
export interface Route {
  id: string;
  from: string;
  duration: string;
  summary: string;
  steps: { name: string; text: string }[];
}

export const ROUTES: Partial<Record<Locale, Route[]>> = {
  it: [
    {
      id: "milano-centrale", from: "Da Milano Centrale", duration: "33 min",
      summary: "Il treno Frecciarossa collega Milano Centrale a Piacenza in 33 minuti, con fino a 52 corse dirette al giorno (prima 06:07, ultima 23:52).",
      steps: [
        { name: "Prendi la Frecciarossa", text: "A Milano Centrale sali sulla Frecciarossa diretta a Piacenza: il viaggio dura 33 minuti." },
        { name: "Scendi a Piacenza", text: "Scendi alla stazione di Piacenza, capolinea comodo nel centro città." },
        { name: "Raggiungi Roma284 a piedi", text: "Da Piacenza l'appartamento è a 900 metri, circa 9 minuti a piedi lungo il centro." },
      ],
    },
    {
      id: "malpensa", from: "Dall'aeroporto di Malpensa", duration: "~2 h",
      summary: "Da Malpensa si raggiunge Piacenza in circa 2 ore con il Malpensa Express fino a Milano e poi il treno per Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Prendi il Malpensa Express fino a Milano Centrale (circa 50 minuti)." },
        { name: "Treno per Piacenza", text: "A Milano Centrale prendi il treno per Piacenza (33-50 minuti)." },
        { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza raggiungi l'appartamento in 9 minuti a piedi." },
      ],
    },
    {
      id: "linate", from: "Dall'aeroporto di Linate", duration: "~1 h 30",
      summary: "Da Linate si arriva a Piacenza in circa un'ora e mezza usando la metro M4 fino a Milano e poi il treno.",
      steps: [
        { name: "Metro M4", text: "Dalla M4 di Linate raggiungi il centro di Milano e Milano Centrale." },
        { name: "Treno per Piacenza", text: "Prendi il treno diretto a Piacenza (33-50 minuti)." },
        { name: "Arrivo a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi fino all'appartamento." },
      ],
    },
    {
      id: "auto", from: "In auto (Autostrada A1)", duration: "uscita Piacenza Sud/Ovest",
      summary: "Piacenza è sull'Autostrada del Sole A1, a circa un'ora da Milano in auto. In Via Roma il parcheggio è su strisce blu; in alternativa c'è un parcheggio custodito a 300 metri a piedi.",
      steps: [
        { name: "Esci dall'A1", text: "Prendi l'uscita Piacenza Sud o Piacenza Ovest e segui per il centro storico." },
        { name: "Arriva in Via Roma", text: "Raggiungi Via Roma 284, nel cuore del centro." },
        { name: "Parcheggia", text: "In Via Roma il parcheggio è su strisce blu; in alternativa il parcheggio custodito Urban Center, a soli 4 € al giorno e 300 metri a piedi. L'ingresso all'appartamento è al piano terra." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Da Bergamo Orio al Serio e Bologna", duration: "~1 h 30 – 2 h",
      summary: "Da Bergamo Orio al Serio e dall'aeroporto di Bologna si raggiunge Piacenza in treno con un cambio, in circa 1h30-2h.",
      steps: [
        { name: "Raggiungi la stazione", text: "Da Orio al Serio usa il bus per Bergamo; da Bologna parti dalla stazione centrale." },
        { name: "Treno per Piacenza", text: "Prendi il treno per Piacenza, con eventuale cambio a Milano o Bologna." },
        { name: "A piedi fino a Roma284", text: "Dalla stazione di Piacenza, 9 minuti a piedi." },
      ],
    },
  ],
  en: [
    {
      id: "milano-centrale", from: "From Milan Centrale", duration: "33 min",
      summary: "The Frecciarossa train links Milan Centrale to Piacenza in 33 minutes, with up to 52 direct services a day (first 06:07, last 23:52).",
      steps: [
        { name: "Take the Frecciarossa", text: "At Milan Centrale board the Frecciarossa to Piacenza: the journey takes 33 minutes." },
        { name: "Get off at Piacenza", text: "Get off at Piacenza station, a convenient terminus in the city centre." },
        { name: "Walk to Roma284", text: "From Piacenza the apartment is 900 metres away, about a 9-minute walk through the centre." },
      ],
    },
    {
      id: "malpensa", from: "From Malpensa airport", duration: "~2 h",
      summary: "From Malpensa you reach Piacenza in about 2 hours with the Malpensa Express to Milan and then the train to Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Take the Malpensa Express to Milan Centrale (about 50 minutes)." },
        { name: "Train to Piacenza", text: "At Milan Centrale take the train to Piacenza (33-50 minutes)." },
        { name: "Walk to Roma284", text: "From Piacenza station, reach the apartment in a 9-minute walk." },
      ],
    },
    {
      id: "linate", from: "From Linate airport", duration: "~1 h 30",
      summary: "From Linate you reach Piacenza in about an hour and a half using metro M4 to Milan and then the train.",
      steps: [
        { name: "Metro M4", text: "From Linate's M4 reach central Milan and Milan Centrale." },
        { name: "Train to Piacenza", text: "Take the direct train to Piacenza (33-50 minutes)." },
        { name: "Arrive at Roma284", text: "From Piacenza station, a 9-minute walk to the apartment." },
      ],
    },
    {
      id: "auto", from: "By car (A1 motorway)", duration: "Piacenza Sud/Ovest exit",
      summary: "Piacenza is on the A1 motorway, about an hour from Milan by car. On Via Roma parking is on blue lines; alternatively there's a guarded car park a 300-metre walk away.",
      steps: [
        { name: "Exit the A1", text: "Take the Piacenza Sud or Piacenza Ovest exit and follow signs for the historic centre." },
        { name: "Reach Via Roma", text: "Reach Via Roma 284, in the heart of the centre." },
        { name: "Park", text: "On Via Roma parking is on blue lines; alternatively the guarded Urban Center car park, just €4 a day and a 300-metre walk. The apartment entrance is on the ground floor." },
      ],
    },
    {
      id: "bergamo-bologna", from: "From Bergamo Orio al Serio and Bologna", duration: "~1 h 30 – 2 h",
      summary: "From Bergamo Orio al Serio and Bologna airport you reach Piacenza by train with one change, in about 1h30-2h.",
      steps: [
        { name: "Reach the station", text: "From Orio al Serio take the bus to Bergamo; from Bologna start at the central station." },
        { name: "Train to Piacenza", text: "Take the train to Piacenza, with a possible change in Milan or Bologna." },
        { name: "Walk to Roma284", text: "From Piacenza station, a 9-minute walk." },
      ],
    },
  ],
  fr: [
    {
      id: "milano-centrale", from: "Depuis Milan Centrale", duration: "33 min",
      summary: "Le train Frecciarossa relie Milan Centrale à Plaisance en 33 minutes, avec jusqu'à 52 liaisons directes par jour (premier 06h07, dernier 23h52).",
      steps: [
        { name: "Prenez la Frecciarossa", text: "À Milan Centrale, montez dans la Frecciarossa à destination de Plaisance : le trajet dure 33 minutes." },
        { name: "Descendez à Plaisance", text: "Descendez à la gare de Plaisance, terminus pratique dans le centre-ville." },
        { name: "Rejoignez Roma284 à pied", text: "Depuis Plaisance, l'appartement est à 900 mètres, environ 9 minutes à pied à travers le centre." },
      ],
    },
    {
      id: "malpensa", from: "Depuis l'aéroport de Malpensa", duration: "~2 h",
      summary: "Depuis Malpensa, vous rejoignez Plaisance en environ 2 heures avec le Malpensa Express jusqu'à Milan, puis le train pour Plaisance.",
      steps: [
        { name: "Malpensa Express", text: "Prenez le Malpensa Express jusqu'à Milan Centrale (environ 50 minutes)." },
        { name: "Train pour Plaisance", text: "À Milan Centrale, prenez le train pour Plaisance (33 à 50 minutes)." },
        { name: "À pied jusqu'à Roma284", text: "Depuis la gare de Plaisance, rejoignez l'appartement en 9 minutes à pied." },
      ],
    },
    {
      id: "linate", from: "Depuis l'aéroport de Linate", duration: "~1 h 30",
      summary: "Depuis Linate, vous arrivez à Plaisance en environ une heure et demie en utilisant le métro M4 jusqu'à Milan, puis le train.",
      steps: [
        { name: "Métro M4", text: "Depuis la M4 de Linate, rejoignez le centre de Milan et Milan Centrale." },
        { name: "Train pour Plaisance", text: "Prenez le train direct pour Plaisance (33 à 50 minutes)." },
        { name: "Arrivée à Roma284", text: "Depuis la gare de Plaisance, 9 minutes à pied jusqu'à l'appartement." },
      ],
    },
    {
      id: "auto", from: "En voiture (autoroute A1)", duration: "sortie Piacenza Sud/Ovest",
      summary: "Plaisance est sur l'autoroute A1, à environ une heure de Milan en voiture. Via Roma, le stationnement se fait sur les lignes bleues ; il existe aussi un parking gardé à 300 mètres à pied.",
      steps: [
        { name: "Sortez de l'A1", text: "Prenez la sortie Piacenza Sud ou Piacenza Ovest et suivez la direction du centre historique." },
        { name: "Rejoignez Via Roma", text: "Rejoignez le Via Roma 284, au cœur du centre." },
        { name: "Stationnez", text: "Via Roma, le stationnement se fait sur les lignes bleues ; sinon le parking gardé Urban Center, à seulement 4 € par jour et 300 mètres à pied. L'entrée de l'appartement est au rez-de-chaussée." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Depuis Bergame Orio al Serio et Bologne", duration: "~1 h 30 – 2 h",
      summary: "Depuis Bergame Orio al Serio et l'aéroport de Bologne, vous rejoignez Plaisance en train avec une correspondance, en environ 1h30-2h.",
      steps: [
        { name: "Rejoignez la gare", text: "Depuis Orio al Serio, prenez le bus pour Bergame ; depuis Bologne, partez de la gare centrale." },
        { name: "Train pour Plaisance", text: "Prenez le train pour Plaisance, avec une correspondance éventuelle à Milan ou à Bologne." },
        { name: "À pied jusqu'à Roma284", text: "Depuis la gare de Plaisance, 9 minutes à pied." },
      ],
    },
  ],
  de: [
    {
      id: "milano-centrale", from: "Ab Mailand Centrale", duration: "33 Min.",
      summary: "Der Frecciarossa verbindet Mailand Centrale in 33 Minuten mit Piacenza, mit bis zu 52 Direktverbindungen pro Tag (erste 06:07, letzte 23:52).",
      steps: [
        { name: "Nehmen Sie den Frecciarossa", text: "In Mailand Centrale steigen Sie in den Frecciarossa nach Piacenza: Die Fahrt dauert 33 Minuten." },
        { name: "Aussteigen in Piacenza", text: "Steigen Sie am Bahnhof Piacenza aus, einem praktischen Endbahnhof im Stadtzentrum." },
        { name: "Zu Fuß zu Roma284", text: "Von Piacenza ist die Wohnung 900 Meter entfernt, etwa 9 Gehminuten durch das Zentrum." },
      ],
    },
    {
      id: "malpensa", from: "Ab Flughafen Malpensa", duration: "~2 Std.",
      summary: "Von Malpensa erreichen Sie Piacenza in etwa 2 Stunden mit dem Malpensa Express nach Mailand und dann dem Zug nach Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Nehmen Sie den Malpensa Express nach Mailand Centrale (etwa 50 Minuten)." },
        { name: "Zug nach Piacenza", text: "In Mailand Centrale nehmen Sie den Zug nach Piacenza (33–50 Minuten)." },
        { name: "Zu Fuß zu Roma284", text: "Vom Bahnhof Piacenza erreichen Sie die Wohnung in 9 Gehminuten." },
      ],
    },
    {
      id: "linate", from: "Ab Flughafen Linate", duration: "~1 Std. 30",
      summary: "Von Linate erreichen Sie Piacenza in etwa eineinhalb Stunden mit der Metro M4 nach Mailand und dann dem Zug.",
      steps: [
        { name: "Metro M4", text: "Von der M4 in Linate erreichen Sie das Zentrum von Mailand und Mailand Centrale." },
        { name: "Zug nach Piacenza", text: "Nehmen Sie den Direktzug nach Piacenza (33–50 Minuten)." },
        { name: "Ankunft bei Roma284", text: "Vom Bahnhof Piacenza 9 Gehminuten bis zur Wohnung." },
      ],
    },
    {
      id: "auto", from: "Mit dem Auto (Autobahn A1)", duration: "Ausfahrt Piacenza Sud/Ovest",
      summary: "Piacenza liegt an der Autobahn A1, etwa eine Stunde von Mailand mit dem Auto. In der Via Roma gibt es Parkplätze mit blauen Linien; alternativ gibt es einen bewachten Parkplatz in 300 Metern Entfernung.",
      steps: [
        { name: "Verlassen Sie die A1", text: "Nehmen Sie die Ausfahrt Piacenza Sud oder Piacenza Ovest und folgen Sie der Beschilderung zum historischen Zentrum." },
        { name: "Ankunft in der Via Roma", text: "Erreichen Sie die Via Roma 284, im Herzen des Zentrums." },
        { name: "Parken", text: "In der Via Roma gibt es Parkplätze mit blauen Linien; alternativ der bewachte Parkplatz Urban Center, für nur 4 € pro Tag und 300 Meter zu Fuß. Der Wohnungseingang liegt im Erdgeschoss." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Ab Bergamo Orio al Serio und Bologna", duration: "~1 Std. 30 – 2 Std.",
      summary: "Ab Bergamo Orio al Serio und dem Flughafen Bologna erreichen Sie Piacenza mit dem Zug und einmal Umsteigen in etwa 1,5–2 Stunden.",
      steps: [
        { name: "Zum Bahnhof", text: "Von Orio al Serio nehmen Sie den Bus nach Bergamo; von Bologna starten Sie am Hauptbahnhof." },
        { name: "Zug nach Piacenza", text: "Nehmen Sie den Zug nach Piacenza, mit eventuellem Umstieg in Mailand oder Bologna." },
        { name: "Zu Fuß zu Roma284", text: "Vom Bahnhof Piacenza 9 Gehminuten." },
      ],
    },
  ],
  es: [
    {
      id: "milano-centrale", from: "Desde Milán Centrale", duration: "33 min",
      summary: "El tren Frecciarossa conecta Milán Centrale con Piacenza en 33 minutos, con hasta 52 servicios directos al día (primero 06:07, último 23:52).",
      steps: [
        { name: "Toma el Frecciarossa", text: "En Milán Centrale sube al Frecciarossa con destino a Piacenza: el viaje dura 33 minutos." },
        { name: "Baja en Piacenza", text: "Baja en la estación de Piacenza, una cómoda terminal en el centro de la ciudad." },
        { name: "Llega a Roma284 a pie", text: "Desde Piacenza el apartamento está a 900 metros, unos 9 minutos a pie por el centro." },
      ],
    },
    {
      id: "malpensa", from: "Desde el aeropuerto de Malpensa", duration: "~2 h",
      summary: "Desde Malpensa se llega a Piacenza en unas 2 horas con el Malpensa Express hasta Milán y luego el tren a Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Toma el Malpensa Express hasta Milán Centrale (unos 50 minutos)." },
        { name: "Tren a Piacenza", text: "En Milán Centrale toma el tren a Piacenza (33-50 minutos)." },
        { name: "A pie hasta Roma284", text: "Desde la estación de Piacenza, llega al apartamento en 9 minutos a pie." },
      ],
    },
    {
      id: "linate", from: "Desde el aeropuerto de Linate", duration: "~1 h 30",
      summary: "Desde Linate se llega a Piacenza en aproximadamente una hora y media usando el metro M4 hasta Milán y luego el tren.",
      steps: [
        { name: "Metro M4", text: "Desde la M4 de Linate llega al centro de Milán y a Milán Centrale." },
        { name: "Tren a Piacenza", text: "Toma el tren directo a Piacenza (33-50 minutos)." },
        { name: "Llegada a Roma284", text: "Desde la estación de Piacenza, 9 minutos a pie hasta el apartamento." },
      ],
    },
    {
      id: "auto", from: "En coche (autopista A1)", duration: "salida Piacenza Sud/Ovest",
      summary: "Piacenza está en la autopista A1, a aproximadamente una hora de Milán en coche. En Via Roma el aparcamiento es en línea azul; como alternativa hay un aparcamiento vigilado a 300 metros a pie.",
      steps: [
        { name: "Sal de la A1", text: "Toma la salida Piacenza Sud o Piacenza Ovest y sigue las indicaciones hacia el centro histórico." },
        { name: "Llega a Via Roma", text: "Llega a Via Roma 284, en el corazón del centro." },
        { name: "Aparca", text: "En Via Roma el aparcamiento es en línea azul; como alternativa, el aparcamiento vigilado Urban Center, por solo 4 € al día y a 300 metros a pie. La entrada del apartamento está en la planta baja." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Desde Bérgamo Orio al Serio y Bolonia", duration: "~1 h 30 – 2 h",
      summary: "Desde Bérgamo Orio al Serio y el aeropuerto de Bolonia se llega a Piacenza en tren con un transbordo, en aproximadamente 1h30-2h.",
      steps: [
        { name: "Llega a la estación", text: "Desde Orio al Serio toma el autobús a Bérgamo; desde Bolonia parte de la estación central." },
        { name: "Tren a Piacenza", text: "Toma el tren a Piacenza, con un posible transbordo en Milán o Bolonia." },
        { name: "A pie hasta Roma284", text: "Desde la estación de Piacenza, 9 minutos a pie." },
      ],
    },
  ],
  pt: [
    {
      id: "milano-centrale", from: "A partir de Milão Centrale", duration: "33 min",
      summary: "O comboio Frecciarossa liga Milão Centrale a Piacenza em 33 minutos, com até 52 ligações diretas por dia (primeiro 06:07, último 23:52).",
      steps: [
        { name: "Apanhe o Frecciarossa", text: "Em Milão Centrale apanhe o Frecciarossa com destino a Piacenza: a viagem dura 33 minutos." },
        { name: "Desça em Piacenza", text: "Desça na estação de Piacenza, um terminal cómodo no centro da cidade." },
        { name: "Vá a pé até ao Roma284", text: "A partir de Piacenza o apartamento fica a 900 metros, cerca de 9 minutos a pé pelo centro." },
      ],
    },
    {
      id: "malpensa", from: "A partir do aeroporto de Malpensa", duration: "~2 h",
      summary: "A partir de Malpensa chega a Piacenza em cerca de 2 horas com o Malpensa Express até Milão e depois o comboio para Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Apanhe o Malpensa Express até Milão Centrale (cerca de 50 minutos)." },
        { name: "Comboio para Piacenza", text: "Em Milão Centrale apanhe o comboio para Piacenza (33-50 minutos)." },
        { name: "A pé até ao Roma284", text: "A partir da estação de Piacenza, chegue ao apartamento em 9 minutos a pé." },
      ],
    },
    {
      id: "linate", from: "A partir do aeroporto de Linate", duration: "~1 h 30",
      summary: "A partir de Linate chega a Piacenza em cerca de uma hora e meia usando o metro M4 até Milão e depois o comboio.",
      steps: [
        { name: "Metro M4", text: "A partir da M4 de Linate chegue ao centro de Milão e a Milão Centrale." },
        { name: "Comboio para Piacenza", text: "Apanhe o comboio direto para Piacenza (33-50 minutos)." },
        { name: "Chegada ao Roma284", text: "A partir da estação de Piacenza, 9 minutos a pé até ao apartamento." },
      ],
    },
    {
      id: "auto", from: "De carro (autoestrada A1)", duration: "saída Piacenza Sud/Ovest",
      summary: "Piacenza fica na autoestrada A1, a cerca de uma hora de Milão de carro. Na Via Roma o estacionamento é em linhas azuis; em alternativa há um parque vigiado a 300 metros a pé.",
      steps: [
        { name: "Saia da A1", text: "Apanhe a saída Piacenza Sud ou Piacenza Ovest e siga as indicações para o centro histórico." },
        { name: "Chegue à Via Roma", text: "Chegue à Via Roma 284, no coração do centro." },
        { name: "Estacione", text: "Na Via Roma o estacionamento é em linhas azuis; em alternativa o parque vigiado Urban Center, por apenas 4 € por dia e a 300 metros a pé. A entrada do apartamento fica no rés-do-chão." },
      ],
    },
    {
      id: "bergamo-bologna", from: "A partir de Bérgamo Orio al Serio e Bolonha", duration: "~1 h 30 – 2 h",
      summary: "A partir de Bérgamo Orio al Serio e do aeroporto de Bolonha chega a Piacenza de comboio com uma mudança, em cerca de 1h30-2h.",
      steps: [
        { name: "Chegue à estação", text: "A partir de Orio al Serio apanhe o autocarro para Bérgamo; a partir de Bolonha parta da estação central." },
        { name: "Comboio para Piacenza", text: "Apanhe o comboio para Piacenza, com uma possível mudança em Milão ou Bolonha." },
        { name: "A pé até ao Roma284", text: "A partir da estação de Piacenza, 9 minutos a pé." },
      ],
    },
  ],
};
