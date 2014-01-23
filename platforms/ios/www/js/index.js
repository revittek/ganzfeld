var app = {
	initialize: function() {
	},
    onReset: function() {
		document.getElementById("title").style.visibility = "visible";
    	document.getElementById("reset").style.display = "none";
    	document.getElementById("knobby").style.visibility = "visible";
    	document.body.style.backgroundColor = "white";
    	clearInterval(myVar);
    	$('dial').val(111).trigger('change');
    	},
    onInput: function(val) {
    	console.log(val);
    	document.getElementById("title").style.visibility = "hidden";
    	document.getElementById("reset").style.display = "block";
    	document.getElementById("knobby").style.visibility = "hidden";
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, 1000/(val/100));
    }
};