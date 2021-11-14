
import {registerImage} from './lazy';

//* Para crear un número aleatorio

const apiPokemones = "https://assets.pokemon.com/assets/cms2/img/pokedex/full";

const url = "https://randomfox.ca/images";
const minimo = 1;
const maximo = 890;

const random = () => Math.floor(Math.random() * (maximo - minimo)) + minimo;

//* Para crear un contenedor con una imagen
const createImageNode = () => {

    //? Para crear el contenedor
    const container = document.createElement('div');
    container.className = 'p-4';

    //? Para crear la imagen
    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';

    //const apiPokemones = `${apiPokemones}/${random()}.jpg`;
    
    //? ALgoritmo para acomodarse a la api
    var numeroRandom = random();
    var numero = '';

    if(numeroRandom<10){
        numero = "00"+numeroRandom;
    } else if(numeroRandom>=10 && numeroRandom<100){
        numero = "0"+numeroRandom;
    } else {
        numero = ""+ numeroRandom;
    }

    imagen.dataset.src = `${apiPokemones}/${numero}.png`;

    const imageWrapper = document.createElement("div");
    imageWrapper.className="bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);

    return container;
}

const mountNode = document.getElementById('images');

const nuevaImagen = createImageNode();

const addButton = document.querySelector('#add');
const cleanButton = document.querySelector('#clean');

const addImage = () =>  {
    const newImagen = createImageNode();
    mountNode.appendChild(newImagen);
    registerImage(newImagen);
};

const cleanImages = () => {
    mountNode.innerHTML = '';
}

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
