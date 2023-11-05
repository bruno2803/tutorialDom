//SELECTORES(VIDEO 1)

//Por ID
//console.log(document.getElementById("cabecera"));

//Por clase
//console.log(document.getElementsByClassName("border-grey"));

//Por tag
//console.log(document.getElementsByTagName("li"));

//Por propiedad Name
//console.log(document.getElementsByName("cabecera"));

//query
//console.log(document.querySelector("li"));

//query all
//console.log(document.querySelectorAll("#header"));

//query name
//console.log(document.querySelector("[nombre=cabecera]"));

//Tipos de datos( children, parentElement)
//const elemento = document.getElementById("header")

//Tipos de listas
//const lista1 = document.getElementsByClassName("border-grey") /*dinamico*/
//const lista2 = document.querySelectorAll(".border-grey") /*estatico*/

//CREANDO ELEMENTOS(VIDEO 2)

//const titulo2 = document.createElement("h2");
//const textoTitulo2 = document.createTextNode("Nuevo titulo para el video");
//const comentario = document.createComment("comentario random");

//Clonando elementos
//const articulo = document.querySelector("article");
//const articulo2 = articulo.cloneNode(true);

//Insertando elementos(appendChild, insterAdjacentElement("beforebegin","afterbegin","beforeend","afterend")
//, insterAdjacentText("beforebegin","afterbegin","beforeend","afterend"))
//, insterAdjacentHTML("beforebegin","afterbegin","beforeend","afterend"))
//const section = document.getElementById("section");

//Eliminando elementos
//section.remove()

//Modificando elementos
//section.innerHTML() , .outerHTML() , .textContent()

//Modificando propiedades
//section.getAttribute() , .setAttribute() , .textContent() , .className , .classList.add() , .classList.remove() , 
// .classList.toggle()

//EVENTOS(VIDEO 3)

//Añadiendo listeners
/*function clickTitulo(){
    console.log("El usuario hizo click en el titulo");
}*/

//const titulo2 = document.getElementById('tituloForm');

//titulo2.onclick = clickTitulo; NO USAR

//titulo2.addEventListener("click", clickTitulo); /*RECOMENDADA*/
//titulo2.removeEventListener("click", clickTitulo);

//Evento DOMContentLoaded
/*document.addEventListener('DOMContentLoaded', () =>{
    console.log('El documento se ha cargado')
})*/

//Evento SUBMIT
const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    //Eliminar comportamiento nativo
    event.preventDefault();
    const {name, email, password} = event.target;
    console.log(name.value, email.value, password.value);

    if(name.value.length === 0 || email.value.length === 0 || password.value.length === 0) alert("Debe completar todos los campos");
};

form.addEventListener('submit', enviarFormulario);

//EVENT BUBBLING(VIDEO 4)

//const section = document.querySelector('#seccion');
//const titulo2 = document.querySelector('#titulo2');

/*titulo2.addEventListener('click', (event) =>{
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);
    console.log("CLICK EN EL TITULO");
});*/
/*section.addEventListener('click', () =>{
    console.log("CLICK EN LA SECCION");
});*/

//Delegacion de eventos
//const section = document.querySelector('#seccion');

/*section.addEventListener('click', (event) =>{
    console.log(event.target, event.currentTarget);
});*/

//Eventos de captura
const section = document.querySelector('#seccion');
const titulo2 = document.querySelector('#titulo2');

titulo2.addEventListener('click', (event) =>{
    console.log("CLICK EN EL TITULO");
});

section.addEventListener(
    'click',
    () =>{
    console.log("CLICK EN LA SECCION");
    },
    {
        capture: true,
    }
);


