let horas = document.getElementById("Relogio-horas");
let minutos = document.getElementById("Relogio-minutos");
let segundos = document.getElementById("Relogio-segundos");

document.getElementById("btn-laranja").addEventListener("click", function(){
  document.querySelector("body").setAttribute("class","laranja");
});

document.getElementById("btn-preto").addEventListener("click", function(){
  document.querySelector("body").setAttribute("class","preto");
});
document.getElementById("btn-purple").addEventListener("click", function(){
  document.querySelector("body").setAttribute("class","purple");
});




horas.addEventListener('click',atualizarHora);

function atualizarHora() {
  const horaAtual = new Date();
  horas.textContent = horaAtual.getHours();
  minutos.textContent = horaAtual.getMinutes();
  segundos.textContent= horaAtual.getSeconds();
  
}

setInterval(atualizarHora, 1000);