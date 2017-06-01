
$(document).ready(function() {

// Set global variables:
var ranNum = 1;
var playerPoints = 0;
var lossScore = 0;
var winScore = 0;

// Game Win/Loss Condition Loop
function winLoss() {
	if(playerPoints > ranNum) {
	alert("You lose");
	lossScore++;
	// document.getElementById("lossScore").innerHTML = lossScore;
	$("#lossScore").text(lossScore);
	// resetAll();
	gameStart();

	} else if(playerPoints == ranNum) {
	alert("You win");
	winScore++;
	// document.getElementById("winScore").innerHTML = winScore;
	$("#winScore").text(winScore);
	// resetAll();
	gameStart();
	}
}

gameStart();

// Game loop function
function gameStart() {

	// Resets random numer and player points
	ranNum = 1;
	playerPoints = 0;
	$("#playerPoints").empty();
	$("#randNum").empty();

	// Sets condition for wins and losses
	if(playerPoints > ranNum) {
	alert("You lose");
	lossScore = lossScore + 1;

	} else if(playerPoints == ranNum) {
	alert("You win");
	winScore = winScore + 1;

	}

	// Assign generated number to a random number and assign each gem to a random number
	ranNum = Math.floor((Math.random() * 120) + 19);
	console.log(ranNum);

	ruby = 1 + Math.floor(Math.random() * 12);
	console.log("Ruby is " + ruby);
	diamond = Math.floor((Math.random() * 12) + 1);
	console.log("Diamond is " + diamond);
	sapphire = Math.floor((Math.random() * 12) + 1);
	console.log("Sapphire is " + sapphire);
	emerald = Math.floor((Math.random() * 12) + 1);
	console.log("Emerald is " + emerald);

	$("#randNum").text(ranNum);
	$("#playerPoints").text(playerPoints);
};

	// Create on-click event handlers for each gem
	$("#ruby").on("click", function(){
		playerPoints = playerPoints + ruby;
		console.log(playerPoints);
		$("#playerPoints").text(playerPoints);
		winLoss();
	})

	$("#diamond").on("click", function(){
		playerPoints = playerPoints + diamond;
		console.log(playerPoints);
		$("#playerPoints").text(playerPoints);
		// $("#playerPoints").append(playerPoints);
		winLoss();
	})

	$("#sapphire").on("click", function(){
		playerPoints = playerPoints + sapphire;
		console.log(playerPoints);
		$("#playerPoints").text(playerPoints);
		// $("#playerPoints").append(playerPoints);
		winLoss();
	})

	$("#emerald").on("click", function(){
		playerPoints = playerPoints + emerald;
		console.log(playerPoints);
		$("#playerPoints").text(playerPoints);
		// $("#playerPoints").append(playerPoints);
		winLoss();
	})

});