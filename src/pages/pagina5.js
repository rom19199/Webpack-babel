import miami1 from '../imagenes/miami1.jpg';
import miami2 from '../imagenes/miami2.jpg';


//import {adelante} from "./content";
//import {atras} from "./content";
import {texto5} from "./index5";
import  '../sass/estilos5.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'




//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);


const a5 = document.getElementById("btn5");
const b5 = document.getElementById("parrafo5");
a5.addEventListener("click",texto5);



const m1 = document.getElementById("m1");
m1.src = miami1;
	
const m2 = document.getElementById("m2");
m2.src = miami2;