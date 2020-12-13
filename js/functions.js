window.onload = function() {
	// alert("La pagina ha cargado");
	for(var i = 0; i<26; i++){
		var img = document.createElement("img");
		img.src = "img/person_" + i + ".png";
		img.alt = "whoareyou";
		img.classList.add("posible");
		img.addEventListener('click', function(event) {
			event.target.style.display = "none";
		})
		//document.getElementById("persons").innerHTML += '<img src="img/person_' + i + '.png" alt="whoareyou" onclick="hideMe()">'
		document.getElementById("persons").appendChild(img);
	}
	var i = Math.floor(Math.random() * 25);
	document.getElementById("selected").innerHTML += '<img src="img/person_' + i + '.png" alt="whoareyou" id="selectedPerson"><br>';
	document.getElementById("selected").innerHTML += '<button onclick="changeSelected()">Cambiar Personaje</button>';
	document.getElementById("selected").innerHTML += '<button onclick="reset()">Resetear tablero</button>';
}

function reset() {
	// alert("Guau!");
	var persons = document.getElementsByClassName("posible");
	for(var i=0; i<persons.length; i++){
		persons[i].style.display = "";
	}
}

function changeSelected() {
	var i = Math.floor(Math.random() * 25);
	document.getElementById("selectedPerson").src = "img/person_" + i + ".png";
}