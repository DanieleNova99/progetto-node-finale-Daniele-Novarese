Progetto node di Novarese Daniele.
Il progetto si basa su un web server che prende dei dati da un'api di gare di trail di un'azienda di Chieri, wedosport.
La pagina index ha un semplice link che rimanda alla pagina gare, che carica dall'api tutte le gare creando degli oggetti.

## Avviare il server --> npm start 

Avvia l'applicazione in modalità di sviluppo.
L'applicazione si apre su http://localhost, con port settata a 3000.

Caricando la pagina di una gara singola, i relativi dati vengono salvati sul file result.txt.
Premendo il pulsante scarica, viene creato un nuovo file .txt contenente tutti i dati relativi alla gara selezionata.
