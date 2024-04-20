function mudarAparencia() {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();

  if (hora >= 6 && hora < 12) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else if (hora >= 12 && hora < 18) {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
  } else if (hora >= 18 && hora < 24) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
  }
}

mudarAparencia();
