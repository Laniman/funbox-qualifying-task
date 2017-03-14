import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

const cardClass = '.card';
const productClass = '.product';
const selectedHoverClass = 'card_selected_hover';
const selectedClass = 'card_selected';

const products = document.querySelectorAll(productClass);

function mouseleaveEventHandler() {
	this.classList.remove(selectedHoverClass);
}

[...products].forEach(product => {
	const card = product.querySelector(cardClass);
	const input = product.querySelector('input');
	card.addEventListener('mouseenter', function () {
		if (!input.checked) {
			return;
		}

		this.classList.add(selectedHoverClass);
	});
	card.addEventListener('mouseleave', mouseleaveEventHandler);
	input.addEventListener('change', () => {
		card.classList.toggle(selectedClass);
		card.classList.remove(selectedHoverClass);
	});
});
