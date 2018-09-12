//"use strict";
// remove strict : Strict is the normal syntaxe of JS. TS compiler needs that normally. Just a try.

//performDownload est une fonction qui est une fonction anonyme 
// avec un paramétre qui est une url
//et cette fonction retourne une Promise décrite par le : Promise<{promiseperformStatus : string}>
// et l'on passe une key/value pair entre {}
//Explication :
//performDownload est la Promise et est une fonction anonyme.
//Elle retourne non pas un message dans la console ou tout autre fonction synchrone mais 
// une Promise...
//Mais une Promise est une fonction async qui espère un callback en retour qui s'appelle '(resolve)'.
//dans le cas d'un resolve alors que je veux que tu fasses alors ce qui est entre les {}
//Ce qui est fait immédiatement lors de l'appelle de la fonction performDownload('msg', 'url');
// on console.log le msg et ensuite on fait une pause de 1 seconde à travers une autre fonction async .
//setTimeout qui execute elle meme resolve() qui est la fonction de retour (pas besoin de return ici).

// Project: https://github.com/xxxx
// Definitions by: RL <https://github.com/kattsushi>
// TypeScript Version: xx

//Exemple d'usage de cet fonction API
//(res est une response de type Object)
// var downloadedObject;
// performDownload('https://my.api.mockaroo.com/salle.json?key=a4ce4e10')
// .then((res) => {
// 	downloadedObject = JSON.stringify(res);
// 	return console.log(JSON.parse(downloadedObject)['JSONContentReturned'][0].nomSalle);
// })

//retour log:
//Downloading from: https://my.api.mockaroo.com/salle.json?key=a4ce4e10
//salle 1

/********************************************************
*                                               		*
*               performDownLoad API       		        *
* TODO : Voir pour faire une déclaration par namespace  *
********************************************************/


import {Promise} from 'es6-promise';
import * as rp from "request-promise";

export let performDownload = function(modelMockaroTemplateUri: string) : Promise<{JSONContentReturned: Object}> {
	//return new Promise((resolve, reject) => {
		return new Promise((resolve, reject) => {		
		console.log(`Downloading from: ${modelMockaroTemplateUri}`);
		setTimeout(()=> {
			let performedObject; //l'object de retour
			//on retourne le resolve de la Promise (ici on passe performedObject)
			if (modelMockaroTemplateUri.length != 0) {
				let options = {
					method: 'GET',
					uri: modelMockaroTemplateUri,
					// transform: this.autoParse(body),
					// headers: {
					//   'User-Agent': 'Request-Promise',
					// },Z
					// body: {},
					strictSSL: false,					
					json: true, // Automatically stringifies the body to JSON
				  };
				rp(options).then(
					(res) => {
						performedObject = res;
						resolve({JSONContentReturned : performedObject});
					}
				);
			}
			else reject({JSONContentReturned: console.log("uri_cannot_be_empty")});
		}, 0); //retour dès la fin du callback sans attendre.
	});
}

//Exemple d'usage de cet fonction API
//(res est une response de type Object)
// let downloadedObject;
// performDownload('https://my.api.mockaroo.com/salle.json?key=a4ce4e10')
// .then((res) => {
// 	downloadedObject = JSON.stringify(res);
// 	return console.log(JSON.parse(downloadedObject)['JSONContentReturned'][0].nomSalle);
// })

//retour log:
//Downloading from: https://my.api.mockaroo.com/salle.json?key=a4ce4e10
//salle 1