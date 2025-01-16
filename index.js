const nomeDoHeroi = 'Jubileu o Grande';
let xpDoHeroi = 1004
let patente;

if (xpDoHeroi >= 0 && xpDoHeroi <= 1000) {
    patente = 'Ferro';
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    patente = 'Bronze';
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 3000) {
    patente = 'Prata';
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    patente = 'Ouro';
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    patente = 'Platina';
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    patente = 'Ascendente';
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    patente = 'Imortal';
} else if (xpDoHeroi >= 10001) {
    patente = 'Radiante';
} else {
    patente = 'Desconhecida'; // Caso o valor de XP seja negativo ou inválido
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${patente}!`);
