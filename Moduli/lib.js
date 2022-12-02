//MODULO LIB.JS


/*--Per fare in modo che questa funzione sia accessibile
dall'esterno usiamo la parola chiave export. Invece di contrassegnare
con export tutti gli elementi della API pubblica possiamo farlo una sola volta
alla fine.*/
function fn_pubblica1(){
    console.log('Ciao da fn_pubblica1()');
}
const fattore = 1.1;

let obj = {
    p1:10
};
function fn_privata(){
    console.log('Ciao da fn_privata()');
}

export {fattore , obj}