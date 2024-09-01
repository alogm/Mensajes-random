import { alegriaArray, tristeArray, enojonArray, miedoArray } from "./data.js";

const botonAlegria = document.querySelector("#alegria");
const botonTriste = document.querySelector("#triste");
const botonEnojo = document.querySelector("#enojo");
const BotonMiedo = document.querySelector("#miedo");

const displayContainer = document.querySelector(".containerQuote");

function displayQuote(quote){
    displayContainer.innerHTML = "";

    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");

    const quoteContent = document.createElement("p");
    quoteContent.textContent = quote.contenido;

    const quoteImage = document.createElement("img");
    quoteImage.src = quote.Img;
    quoteImage.alt = quote.name;

    quoteElement.appendChild(quoteContent);
    quoteElement.appendChild(quoteImage);

    displayContainer.appendChild(quoteElement);
}

botonAlegria.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * alegriaArray.length);
    displayQuote(alegriaArray[randomIndex]);
});

botonTriste.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tristeArray.length);
    displayQuote(tristeArray[randomIndex]);
});

BotonMiedo.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * miedoArray.length);
    displayQuote(miedoArray[randomIndex]);
});

botonEnojo.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * enojonArray.length);
    displayQuote(enojonArray[randomIndex]);
});