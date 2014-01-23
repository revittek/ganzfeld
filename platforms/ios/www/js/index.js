var app = {
	initialize: function() {
		document.getElementById("ready").style.display = "block";
		document.getElementById("title").style.visibility = "hidden";
		document.getElementById("reset").style.display = "none";
	},
	onClickButton: function() {
		document.getElementById("title").style.visibility = "hidden";
		document.getElementById("ready").style.display = "none";
    	document.getElementById("reset").style.display = "block";
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, 111);
	},
    onReset: function() {
		document.getElementById("title").style.visibility = "visible";
    	document.getElementById("ready").style.display = "block";
    	document.getElementById("reset").style.display = "none";
    	document.body.style.backgroundColor = "white";
    	clearInterval(myVar);
    	}
};