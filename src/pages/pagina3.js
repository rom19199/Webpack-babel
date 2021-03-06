import parque1 from '../imagenes/parque1.jpg';
import parque2 from '../imagenes/parque2.jpg';


//import {adelante} from "./content";
//import {atras} from "./content";
import {texto3} from "./index3";
import  '../sass/estilos3.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'




//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);


const a1 = document.getElementById("btn3");
const b1 = document.getElementById("parrafo3");
a1.addEventListener("click",texto3);



const p1 = document.getElementById("p1");
p1.src = parque1;
	
const p2 = document.getElementById("p2");
p2.src = parque2;