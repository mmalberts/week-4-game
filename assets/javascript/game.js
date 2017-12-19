$( document ).ready(function() {

//define variables
var targetNumber = "";

var currentScore = 0;

var wins = 0;

var losses = 0;

var amethyst = {
	name: "amethyst",
	src: "assets/images/amethyst.jpg",
	class: "img crystal",
	value: "",
	setValue: function() {
		this.value = Math.floor(Math.random() * 11) + 1
	},
}

var celestite = {
	name: "celestite",
	src: "assets/images/celestite.jpg",
	class: "img crystal",
	value: "",
	setValue: function() {
		this.value = Math.floor(Math.random() * 11) + 1
	},
}

var titaniumquartz = {
	name: "titaniumquartz",
	src: "assets/images/titaniumquartz.jpg",
	class: "img crystal",
	value: "",
	setValue: function() {
		this.value = Math.floor(Math.random() * 11) + 1
	},
}

var citrine = {
	name: "citrine",
	src: "assets/images/citrine.jpg",
	class: "img crystal",
	value: "",
	setValue: function() {
		this.value = Math.floor(Math.random() * 11) + 1
	},
}

//create functions

//function to set the target number
function setTarget() {
	targetNumber = Math.floor(Math.random() * 101) + 19;
	$("#target-number").text(targetNumber);
}

//function to set/reset values of images

function setImageValues() {
	amethyst.setValue();
	celestite.setValue();
	titaniumquartz.setValue();
	citrine.setValue();
}

//function to assign attributes to all images

function assignAttributes() {
	$("#amethyst").attr(amethyst);
	$("#celestite").attr(celestite);
	$("#titaniumquartz").attr(titaniumquartz);
	$("#citrine").attr(citrine);
}

//one function to call all the functions necessary to set up the game
function gameSetUp() {
	targetNumber = "";
	currentScore = 0
	$("#current-score").text(currentScore);
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);
	setTarget();
	setImageValues();
	assignAttributes();
}

gameSetUp();

$(".crystal").on("click", function() {
	currentScore += this.value;
	$("#current-score").text(currentScore);

	if (currentScore === targetNumber) {
		alert(currentScore + "! You did it!");
		wins++;
		gameSetUp();
	}
	else if (currentScore > targetNumber) {
		alert("Ooh, " + currentScore + ". Try again!");
		losses++;
		gameSetUp();
	}
})

//DO NOT REMOVE - ends document.ready   
});