import { performDownload } from '../src/performDownLoad';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
//Ne pas oublié que en JS :
//function() {}; --> est égale à la fonction fléchée arrow function --> () => {}

// let downloadedObject;
// performDownload('https://my.api.mockaroo.com/salle.json?key=a4ce4e10')
// .then((res) => {
// 	downloadedObject = JSON.stringify(res);
// 	return console.log(JSON.parse(downloadedObject)['JSONContentReturned'][0].nomSalle);
// })


describe('This test on performDowLoad method with args', () => {

    var tests = [
        {args: ['https://my.api.mockaroo.com/salle.json?key=a4ce4e10', 0], expected: "salle 1"}
    ];

    tests.forEach(function(test) {
        it('should be able to return an Object parsed correctly' , () => {
            var downloadedObject;
            performDownload(test.args[0].toString())
            .then((res) => {
                downloadedObject = JSON.stringify(res);
                expect(JSON.parse(downloadedObject)['JSONContentReturned'][test.args[1]].nomSalle).to.equal(test.expected);
            })
            
          }); //fin it
    }); // fin forEact
});
