x = ''
for (var q = 1; q < 19; q++) {
	x += "<a href='item.html?item="+q+"'><img src='images/"+q+".jpg'></a>"
}
document.getElementById('grid').innerHTML = x