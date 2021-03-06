import hotel1 from '../imagenes/hotel1.jpg';
import hotel2 from '../imagenes/hotel2.jpg';


//import {adelante} from "./content";
//import {atras} from "./content";
import {texto2} from "./index2";
import  '../sass/estilos2.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'




//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);


const a = document.getElementById("btn");
const b = document.getElementById("parrafo2");
a.addEventListener("click",texto2);



const h1 = document.getElementById("h1");
h1.src = hotel1;
	
const h2 = document.getElementById("h2");
h2.src = hotel2;

