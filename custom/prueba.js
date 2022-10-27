function addDays(days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    var cadena = diasSemana[date.getUTCDay()] + ' ' + date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getFullYear();
    return cadena;
}

var date = new Date();

var days30 = addDays(30);
console.log(days30);
var days90 = addDays(90);
console.log(days90);
var days365 = addDays(365);
console.log(days365);
var temp = new Date(days30);