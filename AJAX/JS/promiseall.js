//file promiseall.js

import httpRequestPromise from './httpRequestPromise.js';

function request(type, url) {
    return new Promise((resolve, reject) => {
        httpRequestPromise(type, url, resolve, reject);
    });
}

const f1 = request('GET','../f1.txt');
const f2 = request('GET','../f2.txt');
/*f1 e f2 devono essere passate in un array.
  risposte è un Array che può essere iterato con forEach.*/
Promise.all([f1,f2]).then((risposte) => {
     risposte.forEach((risposta,i) => {
        console.log(risposta);
     });
}).catch((err) => {
     console.log(err);
});
/*--Promise.all restituisce una singola promise quando tutte le promise
vengono risolte.*/