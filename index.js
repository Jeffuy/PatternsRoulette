let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function(){
	wheel.style.transform = 'rotate(' + value + 'deg)';
	console.log(value)
	value += Math.ceil(Math.random() * 3600);
}