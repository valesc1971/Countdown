

const d = new Date();

let DayWeek = d.getDay();
const daysWeek = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let dayWkName = daysWeek[d.getDay()];

let DayDay = d.getDate();

let Month = d.getMonth();
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiember", "Octubre", "Noviember", "Diciember"];
let MonthName = months[d.getMonth()];

let Year = d.getFullYear();
let Hour = d.getHours();
let Min = d.getMinutes();
let Seg = d.getSeconds();

const calcSeg = 1000,
      calcMin = calcSeg * 60,
      calcHora = calcMin * 60,
      calcDia = calcHora * 24;

    x=setInterval(function() {

let FutTime = new Date('December 31, 2022 23:59:59').getTime();
let TodayTime = new Date().getTime();

let Dif = FutTime - TodayTime;

let DifSec = (Dif / (1000));
let DifMin = (DifSec / (60));
let DifHour = (DifMin / (60));
let DifDias = (DifMin / (60 * 24));

diaFin= Math.floor(Dif / (calcDia));
document.getElementById('dias').innerHTML=(diaFin);

horasFin = Math.floor((Dif % (calcDia)) / (calcHora));
document.getElementById('horas').innerHTML=(horasFin);

minutosFin = Math.floor((Dif % (calcHora)) / (calcMin));
document.getElementById('minutos').innerHTML=(minutosFin);

segFin = Math.floor((Dif % (calcMin)) / calcSeg);
document.getElementById('segundos').innerHTML=(segFin);

document.getElementById("Contador").innerHTML=(diaFin + '  dias   ' +horasFin + '  horas' + minutosFin + ' mins  ' + segFin + '  segs');

//cambia a numero entero espanhol
let dia = parseInt(DifDias);
let hora = parseInt(DifHour);
let horaWdot =hora.toLocaleString('es-CL');
let min = parseInt(DifMin);
let minWdot = min.toLocaleString('es-CL');
let seg = parseInt(DifSec);
let segWdot = seg.toLocaleString('es-CL');

document.getElementById("Contador").innerHTML=('Para fin de año, faltan '+dia +' dias o ' + horaWdot + ' horas o ' + minWdot +' minutos  o '+segWdot +' segundos.');


}, calcSeg)


function mostrarFecha(){

alert('Hoy es ' + dayWkName +' ' + DayDay +' ' + MonthName +' de '+Year + '.\nLa hora es ' + Hour + ' horas ' + Min +' mins '+Seg +' segs.')

}
mostraFecha();
document.getElementById("FechaHoy").innerHTML=(dayWkName +' ' + DayDay +' ' + MonthName +' de '+Year );






