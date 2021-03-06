"use strict";

var _hotel = _interopRequireDefault(require("../imagenes/hotel1.jpg"));

var _hotel2 = _interopRequireDefault(require("../imagenes/hotel2.jpg"));

var _index = require("./index2");

require("../sass/estilos2.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var a = document.getElementById("btn");
var b = document.getElementById("parrafo2");
a.addEventListener("click", _index.texto2);
var h1 = document.getElementById("h1");
h1.src = _hotel["default"];
var h2 = document.getElementById("h2");
h2.src = _hotel2["default"];