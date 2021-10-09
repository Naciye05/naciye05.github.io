const urlParams = new URLSearchParams(window.location.search);
let item = urlParams.get('item');
const items = [
	"Ganoderma",
	"Gano Fresh",
	"Reishi Gold",
	"Gano Soap",
	"Ganocafe Hazelnut",
	"Gano C'real Spirulina",
	"Gano Schokolade",
	"Oleaf Rooibos",
	"Gano Transparent Soap",
	"Ganocordy",
	"Gano Excelium",
	"Gano Cafe 3in1",
	"Gano Supreno",
	"Oleaf Reebustee",
	"Excelium Gold",
	"Ganocafe Classic",
	"Ganocafe Mocha",
	"G'beaute Reishi-Misty"
]

if (item === null) {
	window.location = '/';
}
else {
	let x = 0
	for (var q = 18; q > 0; q--) {
		if (item.search(q) != -1 && x == 0) {
			x = q
		}
	}

	document.getElementById('pageTitle').innerHTML = item.replace(x, items[x-1]);
	document.getElementById('itemImg').src = 'images/' + item + '.jpg'
	document.getElementById('title').innerHTML = item.replace(x, items[x-1]);

	const iframe = document.getElementById('item');
	iframe.src = 'items/' + item + '.txt';
	iframe.onload = function () {
		const file = iframe.contentDocument.body.innerHTML.split('>')[1].slice(0, -5).split('\n').join('<br>');
		const text = document.getElementById('itemText')
		text.innerHTML = file
		iframe.parentNode.removeChild(iframe)
	}
}