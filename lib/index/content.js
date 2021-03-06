"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.texto = exports.atras = exports.adelante = void 0;
var num = 1;

var adelante = function adelante() {
  // body..
  num++;
  if (num > 3) num = 1;
  var foto = document.getElementById("foto");
  foto.src = "../imagenes/foto" + num + ".jpg";
};

exports.adelante = adelante;

var atras = function atras() {
  // body..
  num--;
  if (num < 1) num = 3;
  var foto = document.getElementById("foto");
  foto.src = "../imagenes/foto" + num + ".jpg";
};

exports.atras = atras;

var texto = function texto() {
  var btn = document.createElement('button');
  btn.id = "btn";
  btn.style.margintop = "20px";
  btn.style.lineHeight = "60px";
  btn.style.fontWeight = "bold";
  btn.style.padding = "0 40px";
  btn.style.backgroundColor = "salmon";
  btn.style.border = "none"; //btn.innerHTML = "Inicia la aventura";
  //btn.onClick = "Esta es mi emocionante historia cuando viaje por primera vez en avion, fue en 2014, viajamos a Orlando a conocer los parques de Disney y a Miami, junto con mis padres, mi hermanita  y yo.Entonces, empecemos...¿Qué aventura te gustaria conocer de primero?.";

  document.getElementById("parrafo1").innerHTML = "Esta es mi emocionante historia cuando viaje por primera vez en avion, fue en 2014, viajamos a Orlando a conocer los parques de Disney y a Miami, junto con mis padres, mi hermanita  y yo.Entonces, empecemos...¿Que aventura te gustaria conocer de primero?.";
  var btnBody = document.createElement('div');
  btn.appendChild(btnBody);
  return btn;
};

exports.texto = texto;