/*
 * lib.js
*/

import httpRequest from './httprequest.js';

const urlBase = 'http://jsonplaceholder.typicode.com';

httpRequest('GET', `${urlBase}/posts/1`, getPost);
//CALLBACK post è il valore ricevuto dalla proprietà responseText.
function getPost(post) {
    console.log(post);
    httpRequest('GET', `${urlBase}/post/1/comments`, showComments);
}
//CALLBACK commenti è il valore ricevuto dalla proprietà responseText.
function showComments(commenti) {
    console.log(commenti);
}
