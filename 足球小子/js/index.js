var NumRandom1 = Math.floor(Math.random()*99);
var NumRandom2 = Math.floor(Math.random()*99);
var NumRandom3 = Math.floor(Math.random()*99);
var Messi = document.getElementById('Messi');
var Beckham = document.getElementById('Beckham');
var Ronaldo = document.getElementById('Ronaldo');
var footballField = document.getElementById('football_field');
console.log(footballField);

var MessiTop = Messi.offsetTop;
var BeckhamTop = Beckham.offsetTop;
var RonaldoTop = Ronaldo.offsetTop;

var MessiLeft = Messi.offsetLeft;
var BeckhamLeft = Beckham.offsetLeft;
var RonaldoLeft = Ronaldo.offsetLeft;

var x = footballField.offsetWidth;
var y = footballField.offsetHeight;

setInterval(function(){
	Messi.style.top = MessiLeft - NumRandom1+'px';
	Messi.style.left = MessiLeft - NumRandom1+'px';
},3000)
setInterval(function(){
	Beckham.style.top = NumRandom2+'px';
	Beckham.style.left = MessiLeft - NumRandom2+'px';
},3000)
setInterval(function(){
	Ronaldo.style.top = MessiLeft - NumRandom3+'px';
	Ronaldo.style.left = MessiLeft + NumRandom3+'px';
},3000)