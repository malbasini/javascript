function httpRequestPromise(type, url, resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();
    xhr.onload = function() {
        if(this.status === 200 && this.readyState === 4) {
            resolve(this.responseText);
        } else {
            reject(errorInfo(this));
        }
    }
}
function errorInfo(xhr){
    return `Errore in ${xhr.responseURL}
            Stato: ${xhr.status}
            Informazioni: ${xhr.statusText}`;
}
export default httpRequestPromise;
