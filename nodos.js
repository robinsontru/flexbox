var header = document.querySelector('header');
// console.log(header)
var logo = document.createElement('h1');
// console.log(logo)
header.appendChild(logo);
const text = document.createTextNode("Proyecto");
logo.appendChild(text)
// logo.document.createTextNode = ''
var nombre = document.createElement('p');
// console.log(logo)
header.appendChild(nombre);
const titulo = document.createTextNode("nombre del proyecto");
nombre.appendChild(titulo)
// 
var menu= document.createElement('nav');
// console.log(logo)
header.appendChild(menu);
const menu1= document.createTextNode("menu navegacion");
menu.appendChild(menu1)
 
var main = document.querySelector('main');
// console.log(main);
var nuevo=document.createElement('h2');
main.appendChild(nuevo);
 const letra = document.createTextNode("Informacion de proyecto");
nuevo.appendChild(letra)
// boton
const button= document.querySelector('#button');
console.log(button)
const input= document.getElementById('input');
// const box= document.getElementById('box');
// 
button.addEventListener('click',()=>{
    console.log('histes click')
})
const button1 = document.querySelector('#button1')
button1.addEventListener('dblclick',()=>{
    console.log(' hicistes doble click')
})
// 
const box=document.querySelector('#box')
box.addEventListener('mouseentesr',()=>{
    box.ccs.replace('red', 'green')
})
// const nuevo1=document.createTextNode("idiomas");
// nuevo.appendChild(nuevo)
// estilo

header.style.display="flex";

// header.style.textAlign="center";
header.style.justifyContent="space-around";
header.style.backgroundColor="yellow";
header.style.border="2px solid red";
header.style.margin="auto";
nombre.style.margin="auto";
nombre.style.border="2px solid green";
menu.style.margin="auto";
menu.style.border="2px solid green";
main.style.backgroundColor="";
main.style.border="2px solid black";
main.style.margin="5vh";