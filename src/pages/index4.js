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

// function texto4(){
// 	document.getElementById("parrafo4").innerHTML = "Ocurrio en el hotel, un día que salimos a uno de los parques. El personal de limpieza del hotel tenía que hacer la limpieza respectiva del cuarto mientras nosotros estabamos fuera, pero cuando regresamos ya en la noche al cuarto, la toalla de mi hermana ya no estaba en donde la habíamos dejado al darse cuenta, ella se puso a dar de llantos por su toalla (tenía 4 años de edad). Al siguiente día mis papás tuvieron que comprarle otra para contentarla.";
// }

export const texto4=()=>{
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
	document.getElementById("parrafo4").innerHTML = "Ocurrio en el hotel, un día que salimos a uno de los parques. El personal de limpieza del hotel tenía que hacer la limpieza respectiva del cuarto mientras nosotros estabamos fuera, pero cuando regresamos ya en la noche al cuarto, la toalla de mi hermana ya no estaba en donde la habíamos dejado al darse cuenta, ella se puso a dar de llantos por su toalla (tenía 4 años de edad). Al siguiente día mis papás tuvieron que comprarle otra para contentarla.";
	const btnBody = document.createElement('div');

	btn.appendChild(btnBody);
	return btn;
}