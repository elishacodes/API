'use strict';

//What is the phase of the moon tonight?

function moonPhase() {
	$.ajax({
		url: "http://api.wunderground.com/api/536b90dc843299c1/astronomy/q/37209.json",
		dataType: "jsonp",
		success : function(data){
			console.log(data);
			console.log("The moon phase is ", data.moon_phase.phaseofMoon);
		}
	});
}
moonPhase();


//In what year was the record low temperature for today's date?  use almanac
function recordLow() {
  $.ajax({
    url : "http://api.wunderground.com/api/536b90dc843299c1/almanac/q/CA/37209.json",
    dataType : "jsonp",
    success : function(data) {
      console.log(data);
      var year = data.almanac.temp_low.recordyear;
      console.log("The lowest temp was in", year);
      }
    });
}
recordLow();


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.  It should then display the results in the html body. Apply some nice CSS.
