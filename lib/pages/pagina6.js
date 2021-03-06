"use strict";

var _heat = _interopRequireDefault(require("../imagenes/heat2.jpg"));

var _heat2 = _interopRequireDefault(require("../imagenes/heat1.jpg"));

var _index = require("./index6");

require("../sass/estilos6.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {adelante} from "./content";
//import {atras} from "./content";
//const texto = document.getElementById("parrafo1");
//const text = texto();
//document.getElementById("boton").appendChild(text);
var a6 = document.getElementById("btn6");
var b6 = document.getElementById("parrafo6");
a6.addEventListener("click", _index.texto6);
var he1 = document.getElementById("he1");
he1.src = _heat2["default"];
var he2 = document.getElementById("he2");
he2.src = _heat["default"];