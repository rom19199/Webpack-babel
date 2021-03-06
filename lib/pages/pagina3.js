"use strict";

var _parque = _interopRequireDefault(require("../imagenes/parque1.jpg"));

var _parque2 = _interopRequireDefault(require("../imagenes/parque2.jpg"));

var _index = require("./index3");

require("../sass/estilos3.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var a1 = document.getElementById("btn3");
var b1 = document.getElementById("parrafo3");
a1.addEventListener("click", _index.texto3);
var p1 = document.getElementById("p1");
p1.src = _parque["default"];
var p2 = document.getElementById("p2");
p2.src = _parque2["default"];