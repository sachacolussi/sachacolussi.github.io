
document.getElementById('boton1').onclick = function () {
    console.log("Se hizo click en el botón 1");
    if (document.getElementById('boton1').innerHTML === "Ocultar información") {
    document.getElementById('experiencia1').style.display='none';
    document.getElementById('boton1').title="Hacer click para mostrar la información";
    document.getElementById('boton1').innerHTML = "Mostrar información";
    console.log("Se ocultó la información")
    } else {
    document.getElementById('experiencia1').style.display='block';
    document.getElementById('boton1').title="Hacer click para ocultar la información";
    document.getElementById('boton1').innerHTML = "Ocultar información";
    console.log("Se muestra la información")
    }
}
document.getElementById('boton2').onclick = function () {
    console.log("Se hizo click en el botón 2");
    if (document.getElementById('boton2').innerHTML === "Ocultar información") {
    document.getElementById('experiencia2').style.display='none';
    document.getElementById('boton2').title="Hacer click para mostrar la información";
    document.getElementById('boton2').innerHTML = "Mostrar información";
    console.log("Se ocultó la información")
    } else {
    document.getElementById('experiencia2').style.display='block';
    document.getElementById('boton2').title="Hacer click para ocultar la información";
    document.getElementById('boton2').innerHTML = "Ocultar información";
    console.log("Se muestra la información");
    }
}
document.getElementById('botonIdiomas').onclick = function () {
    console.log("Se hizo click en el botón de idiomas");
    if (document.getElementById('botonIdiomas').innerHTML === "Ocultar conocimiento en idiomas") {
    document.getElementById('Idiomas').style.display='none';
    document.getElementById('botonIdiomas').title="Hacer clic para mostrar los idiomas aprendidos";
    document.getElementById('botonIdiomas').innerHTML = "Ver conocimiento en idiomas";
    console.log("Se ocultó la información");
    } else {
    document.getElementById('Idiomas').style.display='block';
    document.getElementById('botonIdiomas').title="Hacer clic para ocultar los idiomas aprendidos";
    document.getElementById('botonIdiomas').innerHTML = "Ocultar conocimiento en idiomas";
    console.log("Se muestra la información");
    }
}

document.getElementById('botonDelFormulario').onclick = function() {
    console.log("Se hizo click en el botón de contacto");
    document.getElementById('idFormulario').style.display='block';
    document.getElementById('botonDelFormulario').style.display='none';
}

var input = document.getElementsByClassName('formularioInput')

for (var i = 0; i < input.length; i++) {

    input[i].addEventListener('keyup', function() {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
             } else {
                this.nextElementSibling.classList.remove('fijar');
                    }
    })
}
