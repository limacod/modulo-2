const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarmenu(){
    console.log("\n================================");
    console.log("======== SISTEMA DE GAMER ========");
    console.log("1 - cadrastar jogador ");
    console.log("2 - deletar jogador ");
    console.log("3 - mostrar equipe ");
    console.log("4 - calculo da media da equipe ");
    console.log("5- buscar jogador ");
    console.log("6 - atualizar pontos ");
    console.log("7 - sair ");
    
}

function mostrarequipe(){
    if(time.length === 0){
        return;
    }

    for(let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log(( i + 1 ) + jogador.nome + " | Função:" + jogador.funcao + " | pontuação : " + jogador.pontuacao);
    }
}

function cadrastarjogador(){
      let name = prompt(" digite o nome do jogador:  ");
      let funcaojogador = prompt("Digite a função no time:  ");
      let pontuacaojogador =Number(prompt("Digite a pontuação:    "));

      if (isNaN(pontuacaojogador)) {
        console.log("pontuação invalida!");
        return;
      } else {
            let recruta = {
            nome: name,
            funcao: funcaojogador,
            pontuacao: pontuacaojogador,
        }

            time.push(recruta);
            console.log("jogador " + name + " cadrastado com sucesso");
            console.log("-------------------------------------------");
      }
        
}

function deletarjogador(){
     if(time.length ===0){
        console.log("nenhum jogador cadrastado");
        return;
    }

    let namedeletado = prompt("digite o nome a ser deletado : ");
    let indexdeletado = -1;

    for(let i = 0; i<time.length; i++){
        if(time[i].nome===namedeletado){
        indexdeletado = i;
        break;
    }

    }
    
    if(indexdeletado === -1){
        console.log("jogador não encontrado...");
        return;
    }

    time.splice(indexdeletado, 1);
     console.log("jogador deletado com sucesso!");
    
}

function calculodamedia(){
    if (time.length === 0){
    console.log("nenhum jogador cadrastado");
     return;
    }

    let totalpontos = 0;

    for(let i = 0; i< time.length; i++){
        totalpontos = totalpontos + time[i].pontuacao;
    }

    let mediapontos = totalpontos / time.length;

    console.log("o time possui uma pontuação média de:  ", mediapontos);
}

function buscarjogador(){
    let nomeDesejado = prompt("digite o nome desejado: ");
    console.log("buscando por: " + nomeDesejado + "...");
    let encontrou = false;

    for(let i = 0; i<time.length;i++){
        let jogadoratual = time[i];

        if(jogadoratual.nome===nomeDesejado){
            console.log("JOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadoratual.nome + " | Pontos: " + jogadoratual.pontuacao); 
            encontrou = true;
            break;
        }

    }
    if (encontrou === false){
        console.log("o jogador " + nomeDesejado + " não faz parte da nossa equipe. ");
    }
}

function atualizarpontos(){
 if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }

    let nomeatt = prompt("Qual jogador deseja atualizar?");
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadoratual = time[i];

        if (jogadoratual.nome === nomeatt) {
            let pontosdiario = Number(prompt("Quantos pontos o jogador conquistou hoje?"));

            if (isNaN(pontosdiario)) {
                console.log("Digite uma pontuação válida!");
                return;
            }

            jogadoratual.pontuacao += pontosdiario;

            console.log("Pontuação atualizada com sucesso!");
            console.log("Pontuação atual: " + jogadoratual.pontuacao);

            encontrou = true;
            break;
        }
    }

    if (encontrou === false) {
        console.log("Jogador não encontrado!");
    }
}

while(continuar === true) {
    
    mostrarmenu();
    let opcao =prompt("digite sua opção:  ");

    if(opcao === '1'){
          cadrastarjogador ();
        } else if(opcao ==='2'){
          deletarjogador();
        } else if(opcao === '3'){
            mostrarequipe();
        } else if(opcao==='4'){
            calculodamedia();
        } else if (opcao === '5'){
            buscarjogador();
        } else if (opcao ==='6'){
            atualizarpontos();
         } else if (opcao ==='7'){
            continuar = false;
        }
        else{
            console.log("opção invalida, digite outra opção...");
        }

    }

   
