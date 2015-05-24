$(document).ready(function() {

	for (i = 1; i <=100; i++) {

		if (i%3 == 0 && i%5 == 0) {
			$('body').append(" fizzbuzz <br>");
		}

		else if (i%3 == 0) {
			$('body').append(" fizz <br>");
		} 

		else if (i%5 == 0) {
			$('body').append(" buzz <br>");
		}

		else {
			$('body').append( i + "<br>");
		}
	}

});
