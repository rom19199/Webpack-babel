"use strict";

var _foto = _interopRequireDefault(require("../imagenes/foto2.jpg"));

var _foto2 = _interopRequireDefault(require("../imagenes/foto3.jpg"));

var _foto3 = _interopRequireDefault(require("../imagenes/foto1.jpg"));

var _content = require("./content");

require("../sass/estilos.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var x = document.getElementById("boton");
var y = document.getElementById("parrafo1");
x.addEventListener("click", _content.texto);
var f1 = document.getElementById("f1");
f1.src = _foto3["default"];
var f2 = document.getElementById("f2");
f2.src = _foto["default"];
var f3 = document.getElementById("f3");
f3.src = _foto2["default"]; //const a = document.getElementById("a");
//a.addEventListener("click", adelante);
//const img2 = document.getElementById("foto");
//img2.src = foto3;
//const b = document.getElementById("b");
//b.addEventListener("click", atras);