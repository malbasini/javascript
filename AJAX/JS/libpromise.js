/*file libpromise.js



* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/

import httpRequestPromise from './httpRequestPromise.js';

function request(type, url) {
    return new Promise((resolve, reject) => {
        httpRequestPromise(type, url, resolve, reject);
    });
}

const url = 'https://jsonplaceholder.typicode.com';

request('GET', `${url}/posts/1`).then((risp) => {
    /*Se stiamo all'interno di questo then significa
    che la richiesta AJAX è andata a buon fine e la
    promise è stata risolta. Possiamo invocare a
    cascata di nuovo la funzione request per ritornare
    i commenti e nuovamente ritornando una promise
    possiamo di nuovo usare then*/
    console.log(risp);
    return request('GET', `${url}/posts/1/comments`);
}).then((risp) => {
    console.log(risp);
}).catch((err) => {
    console.log(err);
});
