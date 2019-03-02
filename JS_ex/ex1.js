var offset = 100;
var distance = offset;
var bounddistance = offset;
var touch = 5;
document.getElementById('display').innerHTML += "Lan cham dat thu 1 qua bong di duoc : "+distance+"m<br>";
for (i = 2; i <= touch; i++) {
		bounddistance = 0.4*bounddistance;
		distance = distance + 2*bounddistance; 
		 document.getElementById('display').innerHTML += "Lan cham dat thu "+i+" qua bong di duoc : "+distance+"m<br>";
}