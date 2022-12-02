//MODULO LIB2.JS

//EXPORT DEFAULT
import Userbase from "./lib3.js";
export default class User extends Userbase{
    constructor(nome,anni){
        super();
        this.nome = nome;
        this.anni = anni;
    }
    descrivimi(){
        console.log(`nome: ${this.nome} ,anni: ${this.anni}`);
    }
}
export function test(){
    console.log("Ciao da test");
}