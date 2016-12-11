;(function(){

	var calc = document.forms['calc'];

	if ( calc ) {

		var elements = calc.elements;

		for (var i = 0; i < elements.length; i++) {
		  elements[i].addEventListener('change', getCost, false);
		}

		function getCost() {
		  var time = calc.elements.time.value;
		  var person = calc.elements.people.value;
		  var price = calc.elements.price.value;
		  var cost = time * person * price;
		  var span = document.querySelector('.calc__cost span');
		  span.innerHTML = cost;
		  span.setAttribute('data-cost', cost);
		}
	}

}());