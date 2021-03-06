import foto2 from '../imagenes/foto2.jpg';
import foto3 from '../imagenes/foto3.jpg';
import foto1 from '../imagenes/foto1.jpg';


//import {adelante} from "./content";
//import {atras} from "./content";
import {texto} from "./content";
import  '../sass/estilos.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'


//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);


const x = document.getElementById("boton");
const y = document.getElementById("parrafo1");
x.addEventListener("click",texto);



const f1 = document.getElementById("f1");
f1.src = foto1;
	
const f2 = document.getElementById("f2");
f2.src = foto2;

const f3 = document.getElementById("f3");
f3.src = foto3;




//const a = document.getElementById("a");
//a.addEventListener("click", adelante);

//const img2 = document.getElementById("foto");
//img2.src = foto3;


//const b = document.getElementById("b");
//b.addEventListener("click", atras);


