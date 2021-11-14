
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    
    //const imagen  = container.firstChild;
    const imagen = container.querySelector("img");
    //const imagen = container.querySelector("img");
    const url = imagen.dataset.src;
    
    // Carga imagen
    imagen.src=url;

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (imagen) => {
    // IntersectationObservador -> observer(imagen)
    observer.observe(imagen);
};