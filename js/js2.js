/**
 * Created by Lyubov on 30.11.2015.
 */

var menu = document.getElementById("menu");
var child = document.createElement("li");
//var text = document.createTextNode("input");
child.setAttribute("class","menu-container");


/*child.style.border ="1px solid black";
child.style.backgroundColor = "white";
child.style.listStyle = "none";
child.style.height = "200px";
child.style.marginRight = "40px";
child.style.marginTop = "40px";*/

menu.appendChild(child);
var submit = document.getElementsByTagName("input");
var text = document.getElementById("text");
if (submit = true) {
child.innerHTML="<form></form>";} //вот тут надо как-то вставить текст
//child.appendChild("input");
menu.insertBefore(child);