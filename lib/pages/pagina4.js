"use strict";

var _toalla = _interopRequireDefault(require("../imagenes/toalla.jpg"));

var _index = require("./index4");

require("../sass/estilos4.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var a2 = document.getElementById("btn4");
var b2 = document.getElementById("parrafo4");
a2.addEventListener("click", _index.texto4);
var t1 = document.getElementById("t1");
t1.src = _toalla["default"];