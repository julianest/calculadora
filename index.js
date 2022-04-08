import "./style.css"

const screen = document.getElementById('screen');
const body = document.querySelector('body');
const toggle  = document.getElementById('circle');



window.onload = function(){
	alert("Buen dia, recuerde que puede cambiar su preferencia de color clickeando en cualquiera de los 3 numeros de la seccion Theme");
};

		function del(){
			screen.value = screen.value.substr(0, screen.value.length-1);
		};
		function classPantalla1 (){
			body.classList.add('pantalla1');
			body.classList.remove('pantalla2');
			toggle.style.left='36%';
		};
		function classPantalla2 (){
			body.classList.remove('pantalla1');
			body.classList.remove('pantalla2');
			toggle.style.left='0';
		};
		function classPantalla3(){
			body.classList.add('pantalla2');
			body.classList.remove('pantalla1');
			toggle.style.left='65%';
		};


