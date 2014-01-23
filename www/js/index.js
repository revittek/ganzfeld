var app = {
	initialize: function() {
		hertz = 9.0;
	    document.getElementById("okgo").innerHTML = hertz+" Hz";
	},
    onReset: function() {
		document.getElementById("title").style.visibility = "visible";
    	document.getElementById("reset").style.display = "none";
    	document.getElementById("knobby").style.visibility = "visible";
    	document.getElementById("valdisplay").style.display = "block";
    	document.body.style.backgroundColor = "white";
    	clearInterval(myVar);
    	$('dial').val(hertz).trigger('change');
    	},
    okGo: function(val) {
    	console.log(val);
    	document.getElementById("valdisplay").style.display = "none";
    	document.getElementById("title").style.visibility = "hidden";
    	document.getElementById("reset").style.display = "block";
    	document.getElementById("knobby").style.visibility = "hidden";
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, 1000/val);
    },
    onInput: function(val) {
    	hertz = val/100;
    	console.log(hertz);
    	document.getElementById("okgo").innerHTML = hertz+" Hz";
    	this.okGo(hertz);
    }
};