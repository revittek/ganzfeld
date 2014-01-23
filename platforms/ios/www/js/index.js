var app = {
	hertz: 9.0,
	initialize: function() {
	    document.getElementById("okgo").innerHTML = this.hertz+" Hz";
	},
    onReset: function() {
		document.getElementById("title").style.visibility = "visible";
    	document.getElementById("reset").style.display = "none";
    	document.getElementById("knobby").style.visibility = "visible";
    	document.getElementById("valdisplay").style.display = "block";    	
    	document.getElementById("pinky").style.visibility = "visible";
    	document.getElementById("browny").style.visibility = "visible";
    	document.body.style.backgroundColor = "white";
    	clearInterval(myVar);
    	$('dial').val(this.hertz).trigger('change');
    	this.pauseNoise();
    	},
    okGo: function(color) {
    	console.log(this.hertz + " " + color);
    	document.getElementById("valdisplay").style.display = "none";
    	document.getElementById("title").style.visibility = "hidden";
    	document.getElementById("reset").style.display = "block";
    	document.getElementById("knobby").style.visibility = "hidden";
    	document.getElementById("pinky").style.visibility = "hidden";
    	document.getElementById("browny").style.visibility = "hidden";
    	this.playNoise(color);
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, 1000/this.hertz);
    },
    onInput: function(val) {
    	this.hertz = val/100;
    	console.log(this.hertz);
    	document.getElementById("okgo").innerHTML = this.hertz+" Hz";
    	//this.okGo(this.hertz);
    },
    playNoise: function(color) {
    switch(color) {
    case 'white':
    	document.getElementById("whitenoise").play();
    	break;
    case 'pink':
    	document.getElementById("pinknoise").play();
    	break;
    case 'brown':
    	document.getElementById("brownnoise").play();
    	break;
    	}
    },
    pauseNoise: function() {
    white1 = document.getElementById("whitenoise");
    pink1 = document.getElementById("pinknoise");
    brown1 = document.getElementById("brownnoise");
    if(!white1.paused){
    	white1.pause();
    }if(!pink1.paused){
    	pink1.pause();
    }if(!brown1.paused){
    	brown1.pause();
    }
    }
};