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

var hattr1 = "";
var hattr2 = "";
var hattr3 = "";

var tattr1 = "";
var tattr2 = "";
var tattr3 = "";
var tattr4 = "";

var lattr1 = "";
var lattr2 = "";

var characters = [
	{
		name: "Rafael",
		gender: "Male",
		hattr1: "a",
		hattr2: "b",
		hattr3: "c",
		tattr1: "d",
		tattr2: "e",
		tattr3: "f",
		tattr4: "g",
		lattr1: "h",
		lattr2: "k",
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
		assignHeadAttr();
		if (document.getElementById("male").checked) {
			gender = "Male";
			characters.push("{name: " + name + ", \ngender: " + gender + ", \nhattr1: " + hattr1 + ", \nhattr2: " + hattr2 +
												", \nhattr3: " + hattr3 + " },\n");
		}
		else {
			gender = "Female";
			characters.push("{name: " + name + ", \ngender: " + gender + ", \nhattr1: " + hattr1 + ", \nhattr2: " + hattr2 +
												", \nhattr3: " + hattr3 + " },\n");
		}
		refreshList();
	}
	else {
		alert("Please fill all fields before generating")
	}
}

function assignHeadAttr() {
	var val;
	var radios1 = document.getElementById("head1").getElementsByTagName('input');
	for (var i=0; i<radios1.length; i++) {
		if (radios1[i].type == 'radio') {
			if (radios1[i].checked) {
				hattr1 = radios1[i].value;
			}
		}
	}
	var radios2 = document.getElementById("head2").getElementsByTagName('input');
	for (var i=0; i<radios2.length; i++) {
		if (radios2[i].type == 'radio') {
			if (radios2[i].checked) {
				hattr2 = radios2[i].value;
			}
		}
	}
	var radios3 = document.getElementById("head3").getElementsByTagName('input');
	for (var i=0; i<radios3.length; i++) {
		if (radios3[i].type == 'radio') {
			if (radios3[i].checked) {
				hattr3 = radios3[i].value;
			}
		}
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
	  "<a><%= name %></a>" +
		"<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp&nbsp</a>" +
	  "<a><%= gender %></a>" +
	"</div>"
);

var headCompiled = _.template(
	"<div class='post'>" +
	"<p><%= hattr1 %></p>" +
	"<a><%= hattr2 %></a>" +
	"<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp</a>" +
	"<a><%= hattr3 %></a>" +
	"</div>"
);

var torsoCompiled = _.template(
	"<div class='post'>" +
	"<p><a><%= tattr1 %></a><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp</a><a><%= tattr2 %></a></p>" +
	"<p><a><%= tattr3 %></a><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp</a><a><%= tattr4 %></a></p>" +
	"</div>"
);

var legsCompiled = _.template(
	"<div class='post'>" +
	"<a><%= lattr1 %></a>" +
	"<a><%= lattr2 %></a>" +
	"</div>"
);

var str = "";
var strHead = "";

function refreshList() {
	characters.forEach( function(p, i) {
		str = compiled(p);
		strHead = headCompiled(p);
	})

	document.getElementById("list").innerHTML += str;
	document.getElementById("list").innerHTML += strHead;
}
