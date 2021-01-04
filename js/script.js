'use strict';

var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach((elm) => {
	elm.addEventListener('click', () => {
		elm.previousElementSibling.value = '';
	});
});

const input = document.querySelector('.search-box input');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const close = document.getElementsByClassName('close')[0];
const row = document.querySelector('.row');
const images = document.querySelectorAll('.image');

input.addEventListener('click', function () {
	input.style.backgroundColor = '#C2FFE2';
});


close.addEventListener('click', function(){
	modal.style.display = 'none';
});



row.addEventListener('click', function(e) {
	if(e.target.className == 'image') {
		modalImg.src = e.target.src;
		modal.style.display = 'block';
		caption.innerHTML = e.target.alt;
	}
});