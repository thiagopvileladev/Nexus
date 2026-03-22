//SCRIPT PARA BACKGROUND ANIMADO
const capas = [
    "backgrounds/downhill-domination.webp",
    "backgrounds/god-of-war-2.webp",
    "backgrounds/god-of-war.jpg",
    "backgrounds/gran-turismo-4.webp",
    "backgrounds/gta-san-andreas.png",
    "backgrounds/need-for-speed-most-wanted.png",
    "backgrounds/need-for-speed-underground-2.png",
    "backgrounds/resident-evil-4.jpg",
    "backgrounds/tekken-5.png",
];
let indiceAtual = 0;
function mudarCapa() {
    indiceAtual++;
    if (indiceAtual >= capas.length) {
        indiceAtual = 0;
    }
    const proximaCapa = capas[indiceAtual];
    imgElemento.src = proximaCapa;
}
setInterval(mudarCapa, 15000); 