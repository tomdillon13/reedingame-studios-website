var MOTD = ["Yes, we made that car game", "Best esports racing team in the world", "World's most active studio", "Bike Racing sucks!!"]

function choose(Choices){
	var index = Math.floor(Math.random() * Choices.length);
	return Choices[index]
}

document.getElementById("MOTDT").innerHTML = choose(MOTD)