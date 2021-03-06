// var num = 1;
// function adelante() {
// 	// body..
// 	num++;
// 	if(num>2)
// 		num=1;
// 	var foto=document.getElementById("hotel")
// 	foto.src = "../imagenes/hotel"+num+".jpg";
// 	}

// function atras(){
// 	// body..
// 	num--;
// 	if(num<1)
// 		num=2;
// 	var foto=document.getElementById("hotel")
// 	foto.src = "../imagenes/hotel"+num+".jpg";
// 	}

// function texto2(){
// 	document.getElementById("parrafo2").innerHTML = "Salimos del aeropuerto de Guatemala a las 6 a.m, a las 12 a.m aproximadamente estabamos llegando a Orlando, luego alquilamos un vehiculo para ir al hotel (el hotel estaba a 20 minutos del aeropuerto) y para movilizarnos en nuestra estadia alli. Hicimos todo el procedimiento para recoger el carro, configuramos el gps y todo y nosotros felices porque ibamos a descansar un rato despues del viaje. Pero el gps empezo a loquear y nos pedimos en la gran ciudad de Orlando hasta que pasamos por un mismo peaje 2 veces y tuvimos que pagar las 2 veces :(, hasta el fin, pedimos ayuda y pudimos llegar al hotel hasta las 7 p.m, después de que el hotel solo estaba a 20 minutos del aeropuerto nos hicimos más de 6 horas para llegar al hotel, finalmente pudimos llegar y descansar despues del largo día.";
// }

var num=1;
export const adelante=()=> {
	// body..
	
	num++;
	if(num>3)
		num=1;
	var foto=document.getElementById("hotel")
	foto.src = "../imagenes/hotel"+num+".jpg";
	}

export const atras=()=>{
	// body..
	
	num--;
	if(num<1)
		num=3;
	var foto=document.getElementById("hotel")
	foto.src = "../imagenes/hotel"+num+".jpg";
	}


export const texto2=()=>{
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
	document.getElementById("parrafo2").innerHTML = "Salimos del aeropuerto de Guatemala a las 6 a.m, a las 12 a.m aproximadamente estabamos llegando a Orlando, luego alquilamos un vehiculo para ir al hotel (el hotel estaba a 20 minutos del aeropuerto) y para movilizarnos en nuestra estadia alli. Hicimos todo el procedimiento para recoger el carro, configuramos el gps y todo y nosotros felices porque ibamos a descansar un rato despues del viaje. Pero el gps empezo a loquear y nos pedimos en la gran ciudad de Orlando hasta que pasamos por un mismo peaje 2 veces y tuvimos que pagar las 2 veces :(, hasta el fin, pedimos ayuda y pudimos llegar al hotel hasta las 7 p.m, después de que el hotel solo estaba a 20 minutos del aeropuerto nos hicimos más de 6 horas para llegar al hotel, finalmente pudimos llegar y descansar despues del largo día.";
	const btnBody = document.createElement('div');

	btn.appendChild(btnBody);
	return btn;
}

