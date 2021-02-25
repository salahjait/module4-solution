(function (window) {
	var names = ["Yaakov", "Salah", "Ahmed", "Yassin", "Jemmy", "Frank", "Nora", "Sara", "Beggy", "howan"];
	for (var i=0; i < names.length; i++) {
	  var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter == "j") {
		  byeSpeaker.speak(names[i]);
		} else {
		  helloSpeaker.speak(names[i]);
		}
	}
})(window);