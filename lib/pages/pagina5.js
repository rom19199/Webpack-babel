"use strict";

var _miami = _interopRequireDefault(require("../imagenes/miami1.jpg"));

var _miami2 = _interopRequireDefault(require("../imagenes/miami2.jpg"));

var _index = require("./index5");

require("../sass/estilos5.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var a5 = document.getElementById("btn5");
var b5 = document.getElementById("parrafo5");
a5.addEventListener("click", _index.texto5);
var m1 = document.getElementById("m1");
m1.src = _miami["default"];
var m2 = document.getElementById("m2");
m2.src = _miami2["default"];