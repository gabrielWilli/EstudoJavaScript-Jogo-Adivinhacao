// 1 [OK] Gerar um número aleatório

// 2 [OK] Verificar se o valor é <= 0 ou vazio, caso seja nao pode ser adicionado no array

// 3 [OK] Verificar se houve o acerto do número

// 4 [OK] Verifica se o jogador ja atingiu o tanto de tentarivas estipulado

// 5 [] Mostrar detalhes/informações da rodada.

// 6 [OK] Resetar o jogo

// 7 [OK] Esconder div's, abrir somente quando tiver conteúdo

/* 8 [] Desenvolver as *dicas* com fórmulas e teorias matemáticas.
  
  ex: Número gerado: 3
      Dica: É um número primo..
*/


const tentativas = [];
const numChances = 5;


function numeroAleatorio (){
window.aleatorio = Math.floor(Math.random () * 50 + 1)

console.log(aleatorio)

}


window.onload = function() {
  numeroAleatorio()
  
}

function verificaSeValorZeroOuVazio (chute){
  
  let info = document.getElementById('info2');
  
  if (chute <= 0 || chute == ""){
    info.style.display = "block"
    info.innerHTML = "Número não é permitido";
  }else{
    tentativas.push(chute);
    info.style.display = "none"
    info.innerHTML = "";
  }
}

function verificaSeHouveAcerto (chute) {
  let info2 = document.getElementById('info1')
  
  if (chute == aleatorio){
    info2.style.display = "block"
    info2.innerHTML = "PARABÉNS, VOCÊ ACERTOU";
    document.getElementById('chutarNum').disabled = true
    document.getElementById('numChute').disabled = true
  }
  
}

function verificaTentativasJogador () {
  
  let infoExcedeu = document.getElementById('info2');
  
  if (tentativas.length == numChances){
    
     infoExcedeu.style.display= "block"
     infoExcedeu.innerHTML = "Você perdeu!! O número de tentativas foi excedido.";
     document.getElementById('numChute').disabled = true
     document.getElementById('chutarNum').disabled = true
    }
  }


function chutarNumero () {
  let chutes = document.getElementById('numChute').value;
  
  verificaSeValorZeroOuVazio(chutes);
  verificaTentativasJogador(chutes);
  verificaSeHouveAcerto(chutes, aleatorio);
  
  console.log(tentativas.length);
  console.log(tentativas);
  
  document.getElementById('numChute').value = "";
  document.getElementById('numChute').focus();
  
}

function resetGame (){
  while(tentativas.length > 0){
    tentativas.pop();
    
    let info1 = document.getElementById('info1').innerHTML = "";
    let info2 = document.getElementById('info2').innerHTML = "";
    let mostrar = document.getElementById('mostrarDicas').innerHTML ="";
    document.getElementById('chutarNum').disabled = false
    document.getElementById('numChute').disabled = false
    info1 = document.getElementById('info1').style.display = "none";
    info2 = document.getElementById('info2').style.display = "none";
    
    numeroAleatorio()
  }
  
}

function dicas(aleatorio){
 // criar dicas com formulas matemáticas
  
}