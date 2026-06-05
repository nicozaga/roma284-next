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
  nl: [
    {
      id: "milano-centrale", from: "Vanaf Milaan Centrale", duration: "33 min",
      summary: "De Frecciarossa-trein verbindt Milaan Centrale in 33 minuten met Piacenza, met tot 52 directe verbindingen per dag (eerste 06:07, laatste 23:52).",
      steps: [
        { name: "Neem de Frecciarossa", text: "Stap op Milaan Centrale in de Frecciarossa naar Piacenza: de reis duurt 33 minuten." },
        { name: "Stap uit in Piacenza", text: "Stap uit op het station van Piacenza, een handig eindpunt in het stadscentrum." },
        { name: "Loop naar Roma284", text: "Vanaf Piacenza ligt het appartement op 900 meter, ongeveer 9 minuten lopen door het centrum." },
      ],
    },
    {
      id: "malpensa", from: "Vanaf de luchthaven Malpensa", duration: "~2 u",
      summary: "Vanaf Malpensa bereik je Piacenza in ongeveer 2 uur met de Malpensa Express naar Milaan en daarna de trein naar Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Neem de Malpensa Express naar Milaan Centrale (ongeveer 50 minuten)." },
        { name: "Trein naar Piacenza", text: "Neem op Milaan Centrale de trein naar Piacenza (33-50 minuten)." },
        { name: "Loop naar Roma284", text: "Vanaf het station van Piacenza bereik je het appartement in 9 minuten lopen." },
      ],
    },
    {
      id: "linate", from: "Vanaf de luchthaven Linate", duration: "~1 u 30",
      summary: "Vanaf Linate bereik je Piacenza in ongeveer anderhalf uur met de metro M4 naar Milaan en daarna de trein.",
      steps: [
        { name: "Metro M4", text: "Bereik vanaf de M4 bij Linate het centrum van Milaan en Milaan Centrale." },
        { name: "Trein naar Piacenza", text: "Neem de directe trein naar Piacenza (33-50 minuten)." },
        { name: "Aankomst bij Roma284", text: "Vanaf het station van Piacenza, 9 minuten lopen naar het appartement." },
      ],
    },
    {
      id: "auto", from: "Met de auto (snelweg A1)", duration: "afrit Piacenza Sud/Ovest",
      summary: "Piacenza ligt aan de snelweg A1, ongeveer een uur van Milaan met de auto. In de Via Roma is parkeren op blauwe lijnen; als alternatief is er een bewaakte parkeergarage op 300 meter lopen.",
      steps: [
        { name: "Verlaat de A1", text: "Neem de afrit Piacenza Sud of Piacenza Ovest en volg de borden naar het historische centrum." },
        { name: "Bereik de Via Roma", text: "Bereik de Via Roma 284, in het hart van het centrum." },
        { name: "Parkeren", text: "In de Via Roma is parkeren op blauwe lijnen; als alternatief de bewaakte parkeergarage Urban Center, voor slechts € 4 per dag en op 300 meter lopen. De ingang van het appartement is op de begane grond." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Vanaf Bergamo Orio al Serio en Bologna", duration: "~1 u 30 – 2 u",
      summary: "Vanaf Bergamo Orio al Serio en de luchthaven van Bologna bereik je Piacenza met de trein met één overstap, in ongeveer 1u30-2u.",
      steps: [
        { name: "Bereik het station", text: "Neem vanaf Orio al Serio de bus naar Bergamo; vanaf Bologna vertrek je vanaf het centraal station." },
        { name: "Trein naar Piacenza", text: "Neem de trein naar Piacenza, met een mogelijke overstap in Milaan of Bologna." },
        { name: "Loop naar Roma284", text: "Vanaf het station van Piacenza, 9 minuten lopen." },
      ],
    },
  ],
  pl: [
    {
      id: "milano-centrale", from: "Z Mediolanu Centrale", duration: "33 min",
      summary: "Pociąg Frecciarossa łączy Mediolan Centrale z Piacenzą w 33 minuty, z nawet 52 bezpośrednimi połączeniami dziennie (pierwsze 06:07, ostatnie 23:52).",
      steps: [
        { name: "Wsiądź do Frecciarossy", text: "Na Mediolanie Centrale wsiądź do Frecciarossy do Piacenzy: podróż trwa 33 minuty." },
        { name: "Wysiądź w Piacenzy", text: "Wysiądź na dworcu w Piacenzy, wygodnej stacji końcowej w centrum miasta." },
        { name: "Dojdź pieszo do Roma284", text: "Z Piacenzy apartament jest oddalony o 900 metrów, około 9 minut spacerem przez centrum." },
      ],
    },
    {
      id: "malpensa", from: "Z lotniska Malpensa", duration: "~2 godz.",
      summary: "Z Malpensy dotrzesz do Piacenzy w około 2 godziny pociągiem Malpensa Express do Mediolanu, a następnie pociągiem do Piacenzy.",
      steps: [
        { name: "Malpensa Express", text: "Wsiądź do Malpensa Express do Mediolanu Centrale (około 50 minut)." },
        { name: "Pociąg do Piacenzy", text: "Na Mediolanie Centrale wsiądź do pociągu do Piacenzy (33–50 minut)." },
        { name: "Pieszo do Roma284", text: "Z dworca w Piacenzy dotrzesz do apartamentu w 9 minut spacerem." },
      ],
    },
    {
      id: "linate", from: "Z lotniska Linate", duration: "~1 godz. 30",
      summary: "Z Linate dotrzesz do Piacenzy w około półtorej godziny, korzystając z metra M4 do Mediolanu, a następnie z pociągu.",
      steps: [
        { name: "Metro M4", text: "Metrem M4 z Linate dotrzesz do centrum Mediolanu i na Mediolan Centrale." },
        { name: "Pociąg do Piacenzy", text: "Wsiądź do bezpośredniego pociągu do Piacenzy (33–50 minut)." },
        { name: "Przyjazd do Roma284", text: "Z dworca w Piacenzy 9 minut spacerem do apartamentu." },
      ],
    },
    {
      id: "auto", from: "Samochodem (autostrada A1)", duration: "zjazd Piacenza Sud/Ovest",
      summary: "Piacenza leży przy autostradzie A1, około godziny jazdy samochodem z Mediolanu. Przy Via Roma parkowanie odbywa się w niebieskiej strefie; alternatywnie dostępny jest strzeżony parking 300 metrów spacerem.",
      steps: [
        { name: "Zjedź z A1", text: "Zjedź zjazdem Piacenza Sud lub Piacenza Ovest i kieruj się na centrum historyczne." },
        { name: "Dotrzyj na Via Roma", text: "Dotrzyj na Via Roma 284, w samym sercu centrum." },
        { name: "Zaparkuj", text: "Przy Via Roma parkowanie odbywa się w niebieskiej strefie; alternatywnie strzeżony parking Urban Center, za jedyne 4 € dziennie i 300 metrów spacerem. Wejście do apartamentu jest na parterze." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Z Bergamo Orio al Serio i Bolonii", duration: "~1 godz. 30 – 2 godz.",
      summary: "Z Bergamo Orio al Serio oraz z lotniska w Bolonii dotrzesz do Piacenzy pociągiem z jedną przesiadką, w około 1,5–2 godziny.",
      steps: [
        { name: "Dotrzyj na dworzec", text: "Z Orio al Serio skorzystaj z autobusu do Bergamo; z Bolonii wyrusz z dworca głównego." },
        { name: "Pociąg do Piacenzy", text: "Wsiądź do pociągu do Piacenzy, z ewentualną przesiadką w Mediolanie lub Bolonii." },
        { name: "Pieszo do Roma284", text: "Z dworca w Piacenzy 9 minut spacerem." },
      ],
    },
  ],
  sv: [
    {
      id: "milano-centrale", from: "Från Milano Centrale", duration: "33 min",
      summary: "Frecciarossa-tåget förbinder Milano Centrale med Piacenza på 33 minuter, med upp till 52 direktavgångar om dagen (första 06:07, sista 23:52).",
      steps: [
        { name: "Ta Frecciarossa", text: "På Milano Centrale stiger du på Frecciarossa mot Piacenza: resan tar 33 minuter." },
        { name: "Stig av i Piacenza", text: "Stig av vid Piacenzas station, en bekväm ändstation i stadens centrum." },
        { name: "Gå till Roma284", text: "Från Piacenza ligger lägenheten 900 meter bort, cirka 9 minuters promenad genom centrum." },
      ],
    },
    {
      id: "malpensa", from: "Från flygplatsen Malpensa", duration: "~2 tim",
      summary: "Från Malpensa når du Piacenza på cirka 2 timmar med Malpensa Express till Milano och sedan tåget till Piacenza.",
      steps: [
        { name: "Malpensa Express", text: "Ta Malpensa Express till Milano Centrale (cirka 50 minuter)." },
        { name: "Tåg till Piacenza", text: "På Milano Centrale tar du tåget till Piacenza (33–50 minuter)." },
        { name: "Gå till Roma284", text: "Från Piacenzas station når du lägenheten på 9 minuters promenad." },
      ],
    },
    {
      id: "linate", from: "Från flygplatsen Linate", duration: "~1 tim 30",
      summary: "Från Linate når du Piacenza på cirka en och en halv timme med tunnelbana M4 till Milano och sedan tåget.",
      steps: [
        { name: "Tunnelbana M4", text: "Från M4 vid Linate når du centrala Milano och Milano Centrale." },
        { name: "Tåg till Piacenza", text: "Ta direkttåget till Piacenza (33–50 minuter)." },
        { name: "Ankomst till Roma284", text: "Från Piacenzas station, 9 minuters promenad till lägenheten." },
      ],
    },
    {
      id: "auto", from: "Med bil (motorväg A1)", duration: "avfart Piacenza Sud/Ovest",
      summary: "Piacenza ligger vid motorvägen A1, cirka en timme från Milano med bil. På Via Roma sker parkering i blå zon; alternativt finns ett bevakat parkeringshus 300 meters promenad bort.",
      steps: [
        { name: "Lämna A1", text: "Ta avfarten Piacenza Sud eller Piacenza Ovest och följ skyltarna mot historiska centrum." },
        { name: "Kom fram till Via Roma", text: "Kom fram till Via Roma 284, mitt i centrum." },
        { name: "Parkera", text: "På Via Roma sker parkering i blå zon; alternativt det bevakade parkeringshuset Urban Center, för endast 4 € om dagen och 300 meters promenad bort. Lägenhetens entré ligger i bottenvåningen." },
      ],
    },
    {
      id: "bergamo-bologna", from: "Från Bergamo Orio al Serio och Bologna", duration: "~1 tim 30 – 2 tim",
      summary: "Från Bergamo Orio al Serio och flygplatsen i Bologna når du Piacenza med tåg och ett byte, på cirka 1,5–2 timmar.",
      steps: [
        { name: "Ta dig till stationen", text: "Från Orio al Serio tar du bussen till Bergamo; från Bologna utgår du från centralstationen." },
        { name: "Tåg till Piacenza", text: "Ta tåget till Piacenza, med ett eventuellt byte i Milano eller Bologna." },
        { name: "Gå till Roma284", text: "Från Piacenzas station, 9 minuters promenad." },
      ],
    },
  ],
  ja: [
    {
      id: "milano-centrale", from: "ミラノ中央駅から", duration: "33分",
      summary: "高速列車フレッチャロッサがミラノ中央駅とピアチェンツァを33分で結びます。1日最大52本の直通便があります（始発6:07、最終23:52）。",
      steps: [
        { name: "フレッチャロッサに乗車", text: "ミラノ中央駅でピアチェンツァ行きのフレッチャロッサに乗車します。所要時間は33分です。" },
        { name: "ピアチェンツァで下車", text: "市内中心部にある便利な終着駅、ピアチェンツァ駅で下車します。" },
        { name: "徒歩でRoma284へ", text: "ピアチェンツァ駅からアパートメントまでは900メートル、中心部を通って徒歩約9分です。" },
      ],
    },
    {
      id: "malpensa", from: "マルペンサ空港から", duration: "約2時間",
      summary: "マルペンサからは、マルペンサ・エクスプレスでミラノへ、その後ピアチェンツァ行きの列車で約2時間で到着します。",
      steps: [
        { name: "マルペンサ・エクスプレス", text: "マルペンサ・エクスプレスでミラノ中央駅まで（約50分）。" },
        { name: "ピアチェンツァ行きの列車", text: "ミラノ中央駅でピアチェンツァ行きの列車に乗車（33〜50分）。" },
        { name: "徒歩でRoma284へ", text: "ピアチェンツァ駅から徒歩9分でアパートメントに到着します。" },
      ],
    },
    {
      id: "linate", from: "リナーテ空港から", duration: "約1時間30分",
      summary: "リナーテからは、地下鉄M4でミラノへ、その後列車を利用して約1時間半でピアチェンツァに到着します。",
      steps: [
        { name: "地下鉄M4", text: "リナーテのM4でミラノ中心部とミラノ中央駅へ向かいます。" },
        { name: "ピアチェンツァ行きの列車", text: "ピアチェンツァ行きの直通列車に乗車（33〜50分）。" },
        { name: "Roma284に到着", text: "ピアチェンツァ駅から徒歩9分でアパートメントへ。" },
      ],
    },
    {
      id: "auto", from: "車で（高速道路A1）", duration: "ピアチェンツァ南／西出口",
      summary: "ピアチェンツァは高速道路A1沿いにあり、車でミラノから約1時間です。Via Romaでは青線ゾーンでの駐車となります。あるいは徒歩300メートルの場所に管理駐車場があります。",
      steps: [
        { name: "A1を降りる", text: "ピアチェンツァ南またはピアチェンツァ西の出口を降り、歴史地区方面に進みます。" },
        { name: "Via Romaに到着", text: "中心部の中心にあるVia Roma 284に到着します。" },
        { name: "駐車する", text: "Via Romaでは青線ゾーンでの駐車となります。あるいは管理駐車場Urban Centerは1日わずか4ユーロ、徒歩300メートルです。アパートメントの入口は1階にあります。" },
      ],
    },
    {
      id: "bergamo-bologna", from: "ベルガモ・オーリオ・アル・セーリオとボローニャから", duration: "約1時間30分〜2時間",
      summary: "ベルガモ・オーリオ・アル・セーリオやボローニャ空港からは、1回の乗り換えで列車を利用し、約1時間半〜2時間でピアチェンツァに到着します。",
      steps: [
        { name: "駅へ向かう", text: "オーリオ・アル・セーリオからはバスでベルガモへ。ボローニャからは中央駅を出発します。" },
        { name: "ピアチェンツァ行きの列車", text: "ピアチェンツァ行きの列車に乗車。ミラノまたはボローニャで乗り換えの場合があります。" },
        { name: "徒歩でRoma284へ", text: "ピアチェンツァ駅から徒歩9分です。" },
      ],
    },
  ],
  "zh-cn": [
    {
      id: "milano-centrale", from: "从米兰中央车站", duration: "33分钟",
      summary: "红箭高铁连接米兰中央车站与皮亚琴察，仅需33分钟，每天最多52班直达列车（首班06:07，末班23:52）。",
      steps: [
        { name: "乘坐红箭高铁", text: "在米兰中央车站乘坐开往皮亚琴察的红箭高铁：车程33分钟。" },
        { name: "在皮亚琴察下车", text: "在皮亚琴察车站下车，这是位于市中心的便利终点站。" },
        { name: "步行前往Roma284", text: "从皮亚琴察车站到公寓约900米，穿过市中心步行约9分钟。" },
      ],
    },
    {
      id: "malpensa", from: "从马尔彭萨机场", duration: "约2小时",
      summary: "从马尔彭萨乘马尔彭萨快线到米兰，再换乘前往皮亚琴察的列车，约2小时即可到达。",
      steps: [
        { name: "马尔彭萨快线", text: "乘坐马尔彭萨快线到米兰中央车站（约50分钟）。" },
        { name: "前往皮亚琴察的列车", text: "在米兰中央车站乘坐前往皮亚琴察的列车（33至50分钟）。" },
        { name: "步行前往Roma284", text: "从皮亚琴察车站步行9分钟即可到达公寓。" },
      ],
    },
    {
      id: "linate", from: "从利纳特机场", duration: "约1小时30分",
      summary: "从利纳特乘地铁M4到米兰，再换乘列车，约一个半小时即可到达皮亚琴察。",
      steps: [
        { name: "地铁M4", text: "从利纳特的M4前往米兰市中心和米兰中央车站。" },
        { name: "前往皮亚琴察的列车", text: "乘坐前往皮亚琴察的直达列车（33至50分钟）。" },
        { name: "到达Roma284", text: "从皮亚琴察车站步行9分钟到达公寓。" },
      ],
    },
    {
      id: "auto", from: "自驾（A1高速公路）", duration: "皮亚琴察南/西出口",
      summary: "皮亚琴察位于A1高速公路沿线，自驾距米兰约一小时。在Via Roma为蓝线区停车；也可选择步行300米处一个有人看管的停车场。",
      steps: [
        { name: "驶离A1", text: "从皮亚琴察南或皮亚琴察西出口驶出，沿历史中心区方向行驶。" },
        { name: "抵达Via Roma", text: "抵达位于市中心核心的Via Roma 284。" },
        { name: "停车", text: "在Via Roma为蓝线区停车；也可选择有人看管的Urban Center停车场，每天仅需4欧元，步行300米。公寓入口在一楼。" },
      ],
    },
    {
      id: "bergamo-bologna", from: "从贝加莫奥里奥阿尔塞里奥机场和博洛尼亚", duration: "约1小时30分 – 2小时",
      summary: "从贝加莫奥里奥阿尔塞里奥机场和博洛尼亚机场，乘火车换乘一次，约1.5至2小时即可到达皮亚琴察。",
      steps: [
        { name: "前往车站", text: "从奥里奥阿尔塞里奥乘巴士到贝加莫；从博洛尼亚则从中央车站出发。" },
        { name: "前往皮亚琴察的列车", text: "乘坐前往皮亚琴察的列车，可能需在米兰或博洛尼亚换乘。" },
        { name: "步行前往Roma284", text: "从皮亚琴察车站步行9分钟。" },
      ],
    },
  ],
};
