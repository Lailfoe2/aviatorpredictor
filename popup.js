function obtenerHoraActual() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    var horaActual = hora + ":" + minutos + ":" + segundos;
    return horaActual;
  }
  function actualizarReloj() {
    var horaActual = obtenerHoraActual();
    $("#reloj").text(horaActual);
    setTimeout(actualizarReloj, 1000);
  }
  