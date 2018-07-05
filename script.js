window.onload = function() {

		setInterval(moveUfo, 1200);


		function moveUfo(){
		var x = Math.random() * 400;
		var y = Math.random() * 572;
		
	$("#space-ufo").animate({
		top:y,
		left: x	
	}, 200);

}

}; //onload