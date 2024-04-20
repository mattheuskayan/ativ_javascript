function calcularContagemRegressiva() {
    var dataString = document.getElementById("dataInput").value;

    var regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regexData.test(dataString)) {
      alert("Formato de data incorreto. Por favor, digite no formato dd/mm/aaaa.");
      return;
    }

    var partesData = dataString.split("/");
    var dia = parseInt(partesData[0], 10);
    var mes = parseInt(partesData[1], 10);
    var ano = parseInt(partesData[2], 10);
    
    var dataDigitada = new Date(ano, mes - 1, dia);
    if (isNaN(dataDigitada.getTime())) {
      alert("Data inválida. Por favor, insira uma data válida.");
      return;
    }

    // diferença de tempo entre a data digitada e a data atual
    var dataAtual = new Date();
    var diferencaTempo = dataDigitada.getTime() - dataAtual.getTime();

   
    var diasFaltando = Math.ceil(diferencaTempo / (1000 * 3600 * 24));
    var mesesFaltando = Math.ceil(diasFaltando / 30.4375);
    var anosFaltando = Math.ceil(mesesFaltando / 12);

    document.getElementById("resultado").innerHTML = "Faltam: " + diasFaltando + " dias, " + mesesFaltando + " meses e " + anosFaltando + " anos para a data digitada.";
  }
