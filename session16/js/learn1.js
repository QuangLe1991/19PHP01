$('#runMybox').click(function() {
	$('#myBox').animate({'font-size':'10px'});
	$('#myBox').animate({'left':'200px'});
	$('#myBox').animate({'top':'300px'});
	$('#myBox').css({'color': 'blue', 'background-color':'yellow'});
	$('#myBox').animate({'height':'300px'});
	$('#myBox').animate({'widgh':'300px'},'slow');
});
$('#CarRunning').click(function() {
	$('#car').animate({'left':'500px'}, 1000 , function() {
		$('#car').delay("slow").css('transform', 'rotateY(180deg)');
	});
	$('#car').animate({'left':'0px'}, 1000 , function() {
		$('#car').delay("slow").css('transform', 'rotateY(0deg)');
	});
	// $('#car').animate({'top':'300px'});
	// $('#car').delay("slow").css('transform', 'rotateY(180deg)');
});