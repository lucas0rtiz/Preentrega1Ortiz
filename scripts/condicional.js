function verificarTemperatura() {
    var temperatura = parseInt(document.getElementById("temperatura").value);
    var resultadoCondicional = document.getElementById("resultadoCondicional");
    
    if (temperatura > 30) {
      resultadoCondicional.textContent = "Hace calor";
    } else {
      resultadoCondicional.textContent = "Hace frío";
    }
  }