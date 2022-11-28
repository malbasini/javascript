//FUNZIONE httpRequest
function httpRequest(type, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();
    xhr.onload = function() {
        if(this.status === 200 && this.readyState === 4) {
            callback(this.responseText);
        }
    }
}
/*--Vedremo i moduli in un post successivo*/
export default httpRequest;
