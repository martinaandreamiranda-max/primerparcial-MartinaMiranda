const tarjetas = document.querySelector(".tarjetas");

const botontarjetas = document.querySelector("#boton-tarjetas");

const creartarjetas = () => {
    fetch('json/datos.json')

    .then(res => res.json())

    .then(datos => {

        let htmlAcumulado = "";
        
        datos.forEach(album => {

        htmlAcumulado += `<div class="tarjeta">`;

        htmlAcumulado += `<h2>${album.titulo}</h2>`;

        htmlAcumulado += `<p> <b> Release date: </b> ${album.lanzamiento}</p>`;

        htmlAcumulado += `<p> <b> Vibe: </b> ${album.estilo}</p>`;

        htmlAcumulado += `<p> <b> Hit: </b> ${album.hit}</p>`;

        htmlAcumulado += `</div>`;

        });

        tarjetas.innerHTML = htmlAcumulado;
        
    });
};

botontarjetas.addEventListener("click", creartarjetas)

const botoncolor = document.querySelector("#boton-color");

const body = document.querySelector("body");

const cambiarcolor = () => {body.classList.toggle("oscuro")}

botoncolor.addEventListener("click", cambiarcolor);