//Desafio do nivél do Herói

let nomeHeroi = "Paizão";
let experienciaXpHeroi = 6950; 

let nivel;

if (experienciaXpHeroi < 1000) {
    nivel = "Ferro";
} else if (experienciaXpHeroi >= 1001 && experienciaXpHeroi <= 2000) {
    nivel = "Bronze";
} else if (experienciaXpHeroi >= 2001 && experienciaXpHeroi <= 5000) {
    nivel = "Prata";
} else if (experienciaXpHeroi >= 5001 && experienciaXpHeroi <= 7000) {
    nivel = "Ouro";
} else if (experienciaXpHeroi >= 7001 && experienciaXpHeroi <= 8000) {
    nivel = "Platina";
} else if (experienciaXpHeroi >= 8001 && experienciaXpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (experienciaXpHeroi >= 9001 && experienciaXpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);