//Author: Rafael Angelo
//Website: rla-cs4241-main.herokuapp.com

//Change button color on mouseover and again on mouseout
document.getElementById("generateButton").addEventListener("mouseover", colorChange1);
document.getElementById("submitButton").addEventListener("mouseover", colorChange2);
document.getElementById("generateButton").addEventListener("mouseout", colorRestore1);
document.getElementById("submitButton").addEventListener("mouseout", colorRestore2);
document.getElementById("restart").addEventListener("mouseover", colorChange3);
document.getElementById("restart").addEventListener("mouseout", colorRestore3);

//click events for the 3 buttons
document.getElementById("submitButton").addEventListener("click", submitName);
document.getElementById("generateButton").addEventListener("click", generateCharacter);
document.getElementById("restart").addEventListener("click", startOver);

var name = "";
var gender = "";
var nameSubmitted = 0;

var characters = [
	{
		name: "Rafael",
		gender: "Male"
	},
];

function startOver() {
	document.getElementById("headName").innerText = "";
	document.getElementById("torsoName").innerText = "";
	document.getElementById("legsName").innerText = "";

	nameSubmitted = 0;

	document.getElementById("male").checked = false;
	document.getElementById("female").checked = false;

	var c = document.getElementById("head").getElementsByTagName('input');
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			c[i].checked = false;
		}
	}

	var c = document.getElementById("torso").getElementsByTagName('input');
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			c[i].checked = false;
		}
	}

	var c = document.getElementById("legs").getElementsByTagName('input');
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			c[i].checked = false;
		}
	}

}

function submitName() {
	var value = document.getElementById("charName").value;
	name = value;
	document.getElementById("headName").innerText = value;
	document.getElementById("torsoName").innerText = value;
	document.getElementById("legsName").innerText = value;
	nameSubmitted = 1;
}

function generateCharacter() {
	var complete = checkFormComplete();
	if (complete == 1) {
		if (document.getElementById("male").checked) {
			gender = "Male";
			characters.push("{name: " + name + ", \ngender: " + gender + "},\n");
		}
		else {
			gender = "Female";
			characters.push("{name: " + name + ", \ngender: " + gender + "},\n");
		}
		refreshList();
	}
	else {
		alert("Please fill all fields before generating")
	}
}

function checkFormComplete() {
	var c = document.getElementById("head").getElementsByTagName('input');
	var head = 0;
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			if (c[i].checked) {
				head += 1;
			}
		}
	}

	var c = document.getElementById("torso").getElementsByTagName('input');
	var torso = 0;
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			if (c[i].checked) {
				torso += 1;
			}
		}
	}

	var c = document.getElementById("legs").getElementsByTagName('input');
	var legs = 0;
	for (var i = 0; i < c.length; i++) {
		if (c[i].type == 'radio') {
			if (c[i].checked) {
				legs += 1;
			}
		}
	}

	if (nameSubmitted == 1 &&
			(document.getElementById("male").checked || document.getElementById("female").checked) &&
			head == 3 && torso == 4 && legs == 2) {
				return 1;
			}
	else {
		return 0;
	}
}

function colorRestore1() {
	document.getElementById("generateButton").style.background= '';
}

function colorRestore2() {
	document.getElementById("submitButton").style.background = '';
}

function colorRestore3() {
	document.getElementById("restart").style.background = '';
}

function colorChange1() {
	document.getElementById("generateButton").style.background='lightgreen';
}

function colorChange2() {
	document.getElementById("submitButton").style.background = 'lightgreen';
}

function colorChange3() {
	document.getElementById("restart").style.background = 'lightgreen';
}

var compiled = _.template(
	"<div class='post'>" +
	  "<p><%= name %></p>" +
	  "<p><%= gender %></p>" +
	"</div>"
);

var str = "";
characters.forEach( function(p, i) {
	str += compiled(p);
})

document.getElementById("list").innerHTML += str;

function refreshList() {
	characters.forEach( function(p, i) {
		str = compiled(p);
	})

	document.getElementById("list").innerHTML += str;
}
