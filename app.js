const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const horas = document.getElementById("Hora");
const minutos = document.getElementById("Minuto");
const segundos = document.getElementById("Segundo");
const dia = document.getElementById("dia");
const meses = document.getElementById("mes");
const ano = document.getElementById("ano");

const time = setInterval(function tempo() {
    var dataHoje = new Date();
    var h = dataHoje.getHours();
    var m = dataHoje.getMinutes();
    var s = dataHoje.getSeconds();
    var d = dataHoje.getDate();
    var ms = dataHoje.getMonth();
    var a = dataHoje.getFullYear();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    
    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
    dia.textContent = d;
    meses.textContent = mesesDoAno[ms];
    ano.textContent = a;
})