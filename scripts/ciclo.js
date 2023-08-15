function simularCiclo() {
    var temperaturasSemana = [25, 28, 30, 29, 27, 23, 22];
    var resultadoCiclo = document.getElementById("resultadoCiclo");
    
    resultadoCiclo.innerHTML = "<p>Variación de temperatura:</p>";
    for (var i = 0; i < temperaturasSemana.length; i++) {
      resultadoCiclo.innerHTML += "<li>Día " + (i + 1) + ": " +
        (temperaturasSemana[i] > 30 ? "Hace calor" : "Hace frío") + "</li>";
    }
  }