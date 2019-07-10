document.addEventListener("DOMContentLoaded", init);

function init() {
// uchwycenie przycisku 'poprzedni obrazek'
	var prevPicture = document.getElementById("prevPicture");
// uchwycenie przycisku 'nastepny obrazek'
	var nextPicture = document.getElementById("nextPicture");
// uchwycenie elementów listy (brazków) do tablicy
	var list = document.getElementsByTagName("li");

	var index = 0;
	console.log(index);
	list[index].setAttribute("class", "visible");

// nasłuch na kliknięcie przycisku 'forPicture':
	nextPicture.addEventListener("click", forAction);
	
	function forAction(event) { // funkcja pokazująca obrazki

		list[index].removeAttribute("class"); // usuwamy klasę
		index += 1; // zwiększamy index
		
		if (index >= list.length - 1) { // warunek liczba elementów w tablicy nie może przekroczyć 6
			index = 0;
		}
		list[index].setAttribute("class", "visible"); // dodajemy klasę następnemu
	}

// nasłuch na kliknięcie przycisku 'prevPicture':
	prevPicture.addEventListener("click", backAction);
	
	function backAction(event) { // funkcja ukrywająca obrazki

		list[index].removeAttribute("class");
		index -= 1;

		if (index === -1) {
			index = list.length - 1;
		}
		list[index].setAttribute("class", "visible");
	}
}











