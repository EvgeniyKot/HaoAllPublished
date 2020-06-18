let buttons = document.querySelectorAll('.change-viewed-button');

for (let i = 0; i < buttons.length; i++) { //начало цикла, который создает массив
	buttons[i].addEventListener('click', function(e) { //отслеживание события "клик" к переменной "butttons"
		console.log(e.target.getAttribute('data-target')); //проверка. Убрать после завершения
		let elements = document.querySelectorAll('.post'); 

		for(let o = 0; o < buttons.length; o++) {
			buttons[o].classList.remove('active');
		}
		buttons[i].classList.add('active');
		for (let j = 0; j < elements.length; j++) { // цикл, проверяющий совпадения атрибута data-target на кнопке и класса элементе
			if (elements[j].classList.contains(e.target.getAttribute('data-target'))) {
				elements[j].classList.remove('hidden');
			} else {
				elements[j].classList.add('hidden');
			}
		}
	})
} 

