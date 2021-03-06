// var num = 1;
// function adelante() {
// 	// body..
// 	num++;
// 	if(num>2)
// 		num=1;
// 	var foto=document.getElementById("heat")
// 	foto.src = "../imagenes/heat"+num+".jpg";
// 	}

// function atras(){
// 	// body..
// 	num--;
// 	if(num<1)
// 		num=2;
// 	var foto=document.getElementById("heat")
// 	foto.src = "../imagenes/heat"+num+".jpg";
// 	}

// function texto6(){
// 	document.getElementById("parrafo6").innerHTML = "Por ultimo, visitamos Miami para cerrar con broche de oro. Estuvimos 2 días, en donde pudimos visitar los lugares más atractivos de Miami y hacer algunas compras. Uno de los lugares que más me gusto visitar fue la playa y el estadio de Miami Heat. Fueron unos excelentes dias que disfrute al máximo. Y aquí acaba mi travesía por Florida :)";
// }

var num = 1;
function adelante() {
	// body..
	num++;
	if(num>2)
		num=1;
	var foto=document.getElementById("parque")
	foto.src = "../imagenes/parque"+num+".jpg";
	}

function atras(){
	// body..
	num--;
	if(num<1)
		num=2;
	var foto=document.getElementById("parque")
	foto.src = "../imagenes/parque"+num+".jpg";
	}

// function texto3(){
// 	document.getElementById("parrafo3").innerHTML = "Durante nuestra estadía en Orlando tuvimos la oportunidad de visitar 3 parques de Disney, visitamos: Animal Kingdom, Magic Kingdom y Disney Hollywood studios. Magic Kingdom fue uno de los parques que más me gusto porque me llevo de vuelta a mi infancia, recordando las caricaturas y personajes que yo solía ver. El otro lugar que me gustó bastante fue Hollywood studios porque pude ver la manera en que graban algunas películas de hollywood. ";
// }


export const texto6=()=>{
	const btn = document.createElement('button');
	btn.id = "btn";
	btn.style.margintop = "20px";
  	btn.style.lineHeight= "60px";
  	btn.style.fontWeight = "bold";
  	btn.style.padding= "0 40px";
  	btn.style.backgroundColor= "salmon";
  	btn.style.border = "none";
  	//btn.innerHTML = "Inicia la aventura";
	//btn.onClick = "Esta es mi emocionante historia cuando viaje por primera vez en avion, fue en 2014, viajamos a Orlando a conocer los parques de Disney y a Miami, junto con mis padres, mi hermanita  y yo.Entonces, empecemos...¿Qué aventura te gustaria conocer de primero?.";
	document.getElementById("parrafo6").innerHTML = "Por ultimo, visitamos Miami para cerrar con broche de oro. Estuvimos 2 días, en donde pudimos visitar los lugares más atractivos de Miami y hacer algunas compras. Uno de los lugares que más me gusto visitar fue la playa y el estadio de Miami Heat. Fueron unos excelentes dias que disfrute al máximo. Y aquí acaba mi travesía por Florida :)";
	const btnBody = document.createElement('div');

	btn.appendChild(btnBody);
	return btn;
}