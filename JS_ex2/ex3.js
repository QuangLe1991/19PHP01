function DayCounter() {

var bday = new Date(document.getElementById('bday').value);
var day = bday.getDate();	
var month = bday.getMonth();
var year = bday.getFullYear();
var oneday = 24*60*60*1000;
var today = new Date();
var birthday = new Date(year,month,day);
var diffday = Math.round(Math.abs(today.getTime() - birthday.getTime())/oneday);
document.getElementById('display').innerHTML = "Nguoi do da song duoc "+diffday+" ngay<br>";
}