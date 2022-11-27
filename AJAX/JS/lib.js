/*
 * Recuperare dati da API esterne
*/

import httpRequest from './httprequest.js';

const urlBase = 'http://jsonplaceholder.typicode.com';

httpRequest('GET', `${urlBase}/posts/1`, getPost);

function getPost(post) {
    console.log(post);
    httpRequest('GET', `${urlBase}/post/1/comments`, showComments);
}

function showComments(commenti) {
    console.log(commenti);
}
