//-------------------- Botão voltar ao topo  ---------------------

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltarTopo").style.display = "block";
  } else {
    document.getElementById("voltarTopo").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
