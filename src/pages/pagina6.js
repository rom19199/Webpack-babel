import heat2 from '../imagenes/heat2.jpg';
import heat1 from '../imagenes/heat1.jpg';


//import {adelante} from "./content";
//import {atras} from "./content";
import {texto6} from "./index6";
import  '../sass/estilos6.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'


//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);


const a6 = document.getElementById("btn6");
const b6 = document.getElementById("parrafo6");
a6.addEventListener("click",texto6);



const he1 = document.getElementById("he1");
he1.src = heat1;
	
const he2 = document.getElementById("he2");
he2.src = heat2;

