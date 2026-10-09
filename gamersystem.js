const prompt = require("prompt-sync")();

let time = []; 
let continuar =  true

while(continuar === true){
    let username = prompt("digite o nome do usuario ou ('sair') ");

    if(username === 'sair'){
        continuar = false;

    } else {
        time.push(username)
        console.log("usuario " + username + " cadrastado com sucesso");
        console.log("seu time atual é: ", time)
        
    }
}