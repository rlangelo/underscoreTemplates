//Author: Rafael Angelo
//Website: rla-cs4241-main.herokuapp.com

document.getElementById("studButton").addEventListener("click", displayStudent);
document.getElementById("staffBut").addEventListener("click", displayStaff);
var studOrStaff = -1;
document.getElementById("Cancel").addEventListener("click", cancelButton);
document.getElementById("inner").addEventListener("click", Hobby, false);
document.getElementById("middle").addEventListener("click", Age, false);
document.getElementById("outer").addEventListener("click", Department, false);
document.getElementById("inner2").addEventListener("click", Hobby, true);
document.getElementById("middle2").addEventListener("click", sAge, true);
document.getElementById("outer2").addEventListener("click", Department, true);
document.getElementById("staffBut").addEventListener("mouseover", colorChange1);
document.getElementById("studButton").addEventListener("mouseover", colorChange2);
document.getElementById("staffBut").addEventListener("mouseout", colorRestore1);
document.getElementById("studButton").addEventListener("mouseout", colorRestore2);
document.getElementById("subButton").addEventListener("click", submitName);


function submitName() {
	var value = document.getElementById("charName").value;
	document.getElementById("name").innerText = value;
	document.getElementById("subButton").disabled = true;
	document.getElementById("cName").style.visibility = "visible";
}

function colorRestore1() {
	document.getElementById("staffBut").style.background= '';
}

function colorRestore2() {
	document.getElementById("studButton").style.background = '';
}

function colorChange1() {
	document.getElementById("staffBut").style.background='lightgreen';
}

function colorChange2() {
	document.getElementById("studButton").style.background = 'lightgreen';
}

function displayStudent() {
	document.getElementById("outer").style.visibility = "visible";
	document.getElementById("staffBut").disabled = true;
	studOrStaff = 0;
	document.getElementById("type").innerText = "Student";
}

function displayStaff() {
	document.getElementById("outer2").style.visibility = "visible";
	document.getElementById("studButton").disabled = true;
	studOrStaff = 1;
	document.getElementById("type").innerText = "Staff";
}

function cancelButton() {
	document.getElementById("outer").style.visibility = "hidden";
	document.getElementById("outer2").style.visibility = "hidden";
	document.getElementById("subButton").disabled = false;
	document.getElementById("name").innerText = "";
	document.getElementById("type").innerText = "";
	document.getElementById("cName").style.visibility = "hidden";
	document.getElementById("dept").style.visibility = "hidden";
	document.getElementById("age").style.visibility = "hidden";
	document.getElementById("hobby").style.visibility = "hidden";
	if (studOrStaff == 0) {
		document.getElementById("staffBut").disabled = false;
	}
	else {
		document.getElementById("studButton").disabled = false;
	}
	studOrStaff = -1;
}

var departments = ["Actuarial Mathematics", "Aerospace Engineering", "Architectural Engineering", "Biochemistry", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Science", "Electrical and Computer Engineering", "Environmental Engineering", "Fire Protection Engineering", "Industrial Engineering", "Manufacturing Engineering", "Mechanical Engineering", "Robotics Engineering"];

var hobbies = ["3D printing", "Amateur Radio", "Acting", "Board Games", "Book Restoration", "Cabaret", "Calligraphy", "Candle Making", "Coffee Roasting", "Cooking", "Coloring", "Cosplaying", "Couponing", "Creative Writing", "Crocheting", "Cryptography", "Dancing", "Digital Arts", "Drama", "Drawing", "Do it Yourself", "Embroidery", "Flower Arrangement", "Foreign Language Learning", "RPGs", "Gambling", "Genealogy", "Glassblowing", "Gunsmithing", "Homebrewing", "Ice Skating", "Jewerly Making", "Jigsaw Puzzles", "Juggling", "Knapping", "Knitting", "Knifemaking", "Lacemaking", "Lapidary", "Leather Crafting", "Lego Building", "Lockpicking", "Machining", "Metalworking", "Magic", "Model Building", "Listening to Music", "Origami", "Painting", "Playing Instruments", "Pet", "Pottery", "Quilting", "Reading", "Scrapbooking", "Sculpting", "Sewing", "Singing", "Sketching", "Soapmaking", "Stand-up Comedy", "Sudoku", "Table Tennis", "Taxidermy", "Video Games", "Watching Movies", "Web Surfing", "Whittling", "Wood Carving", "Woodworking", "Writing", "Yoga", "Yo-yoing"];

function Hobby() {
	if (studOrStaff == 0) {
		setTimeout(function(){
			var value = getRandomInt(0, hobbies.length-1);
			var hobby = hobbies[value];
			document.getElementById("randHobby").innerText = hobby;
			document.getElementById("hobby").style.visibility = "visible";
		}, 300);
	} else {
		setTimeout(function(){
			var value = getRandomInt(0, hobbies.length-1);
			var hobby = hobbies[value];
			document.getElementById("randHobby").innerText = hobby;
			document.getElementById("hobby").style.visibility = "visible";
		}, 1500);
	}
}

function Age() {
	setTimeout(function(){
	var age = getRandomInt(17, 28);
	document.getElementById("randAge").innerText = String(age);
	document.getElementById("age").style.visibility = "visible";
	}, 1000);
}

function Department() {
	if (studOrStaff == 0){
		setTimeout(function(){
			var value = getRandomInt(0, departments.length-1);
			var department = departments[value];
			document.getElementById("randDept").innerText = department;
			document.getElementById("dept").style.visibility = "visible";
		}, 1500);
	}
	else {
		setTimeout(function(){
			var value = getRandomInt(0, departments.length-1);
			var department = departments[value];
			document.getElementById("randDept").innerText = department;
			document.getElementById("dept").style.visibility = "visible";
		}, 300);
	}
}

function sAge() {
	setTimeout(function(){
		var age = getRandomInt(27, 80);
		document.getElementById("randAge").innerText = String(age);
		document.getElementById("age").style.visibility = "visible";
	}, 1000);
	
}

function getRandomInt(min, max) { 
	var number = Math.floor(Math.random() * (max - min + 1)) + min;
	return number;
}
