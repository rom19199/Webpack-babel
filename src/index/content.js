var num=1;
export const adelante=()=> {
	// body..
	
	num++;
	if(num>3)
		num=1;
	var foto=document.getElementById("foto")
	foto.src = "../imagenes/foto"+num+".jpg";
	}

export const atras=()=>{
	// body..
	
	num--;
	if(num<1)
		num=3;
	var foto=document.getElementById("foto")
	foto.src = "../imagenes/foto"+num+".jpg";
	}


export const texto=()=>{
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
	document.getElementById("parrafo1").innerHTML = "Esta es mi emocionante historia cuando viaje por primera vez en avion, fue en 2014, viajamos a Orlando a conocer los parques de Disney y a Miami, junto con mis padres, mi hermanita  y yo.Entonces, empecemos...¿Que aventura te gustaria conocer de primero?.";

	const btnBody = document.createElement('div');

	btn.appendChild(btnBody);
	return btn;
}

