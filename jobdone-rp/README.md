# jobdone-rp Helper
Pour aider au parcours des URI de Mockaroo en accès publique, afin de populer le jeu de données pour DevoirsFaits, la méthode suivante a été développée :
- performDownload

        //Exemple d'usage de cet fonction API
        //(res est une response de type Object)
        let downloadedObject;
        performDownload('YourUri')
        .then((res) => {
        downloadedObject = JSON.stringify(res);
        return console.log(JSON.parse(downloadedObject)['JSONContentReturned']);
        })

la branche git est normalement tagguée à la version du module 