/*globals jQuery: false*/

const allowHTML = true;

let arr = [
	'Nome <em>1</em>',
	'Nome 2',
	'Nome 3'
];

let newArr = arr.map((item, index) => {
	return `<div class="item-${index}">${item}</div>`;
});

for (let i in newArr) {
	const self = newArr[i];

	let element = document.createElement('div');
	
	allowHTML ?
		element.innerHTML = self
	:
		element.innerText = self
	;

	document.body.appendChild(element);
}
