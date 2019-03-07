var old_sum = 294;
var new_sum = 215;
function Calculator() {
	var km = parseInt(document.getElementById('km').value);
	var first_stage = 1;
	var second_stage = (km > 31)?30:(km-1);
	var third_stage = (km > 31)?(km-31):0;
	document.getElementById('display').innerHTML = "So km la "+km+"km<br>";
	document.getElementById('display').innerHTML += "So km dau tien la "+first_stage+"km = "+first_stage*15000+"đ<br>";
	document.getElementById('display').innerHTML += "So km thu hai la  "+second_stage+"km = "+second_stage*12000+"đ<br>";
	document.getElementById('display').innerHTML += "So km thu ba la   "+third_stage+" km = "+third_stage*8000+"đ<br>";
	document.getElementById('display').innerHTML += "Tong so tien la   "+(first_stage*15000+second_stage*12000+third_stage*8000)+"đ<br>";
}
