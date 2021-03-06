// var num = 1;
// function adelante() {
// 	// body..
// 	num++;
// 	if(num>2)
// 		num=1;
// 	var foto=document.getElementById("miami")
// 	foto.src = "../imagenes/miami"+num+".jpg";
// 	}

// function atras(){
// 	// body..
// 	num--;
// 	if(num<1)
// 		num=2;
// 	var foto=document.getElementById("miami")
// 	foto.src = "../imagenes/miami"+num+".jpg";
// 	}

// function texto5(){
// 	document.getElementById("parrafo5").innerHTML = "Luego de nuestro viaje a Orlando viajamos a Miami. Ya estando en el aeropuerto de Miami, mi hermanita empezó a hacer un gran berrinche porque quería algo pero mis papás no se lo compraron, entonces rapidamente se acerco una trabajadora del aeropuerto y le dio una paleta a mi hermana y le empezó a preguntar si en realidad nosotros eramos sus familiares, mi hermana dentro de su llanto le dijo que sí. Luego nostros le explicamos a la trabajadora que estaba haciendo un berrinche y ella nos dijo que siempre que miran a un niño llorar mucho proceden a preguntarle para verificar que todo este bien y no hayan indicios de secuestro ya que es muy commún que se de.";
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


export const texto5=()=>{
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
	document.getElementById("parrafo5").innerHTML = "Luego de nuestro viaje a Orlando viajamos a Miami. Ya estando en el aeropuerto de Miami, mi hermanita empezó a hacer un gran berrinche porque quería algo pero mis papás no se lo compraron, entonces rapidamente se acerco una trabajadora del aeropuerto y le dio una paleta a mi hermana y le empezó a preguntar si en realidad nosotros eramos sus familiares, mi hermana dentro de su llanto le dijo que sí. Luego nostros le explicamos a la trabajadora que estaba haciendo un berrinche y ella nos dijo que siempre que miran a un niño llorar mucho proceden a preguntarle para verificar que todo este bien y no hayan indicios de secuestro ya que es muy commún que se de."; 
	const btnBody = document.createElement('div');

	btn.appendChild(btnBody);
	return btn;
}