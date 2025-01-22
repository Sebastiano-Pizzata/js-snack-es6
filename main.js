// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).



// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciDaCorsa = [
    { nome: "Bici A", peso: 6.2 },
    { nome: "Bici B", peso: 7.5 },
    { nome: "Bici C", peso: 5.8 },
    { nome: "Bici D", peso: 6.9 }
];

function pesoBiciMinore(bici){
    let biciLeggera = bici[0];

    for(let i = 0; i < bici.length; i++){
        if(bici[i].peso < biciLeggera.peso){
            biciLeggera = bici[i];
        }
    }
    console.log(`la bici più leggera è ${biciLeggera.nome} e ha un peso di ${biciLeggera.peso}Kg`)
}

pesoBiciMinore(biciDaCorsa)








// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function RandomNumber() {
    return Math.floor(Math.random() * 11);
}


const squadre = [
    { nome: "Juventus", punti: RandomNumber(), 
                    falliSubiti: RandomNumber() },
    { nome: "Inter Milan", punti: RandomNumber(), 
                    falliSubiti: RandomNumber() },
    { nome: "AC Milan", punti: RandomNumber(),
                    falliSubiti: RandomNumber() },
    { nome: "Roma", punti: RandomNumber(), 
                    falliSubiti: RandomNumber() },
    { nome: "Napoli", punti: RandomNumber(), 
                    falliSubiti: RandomNumber() },
    { nome: "Lazio", punti: RandomNumber(),
                    falliSubiti: RandomNumber() }          
];


let arrayNomiEFalli = [];

for(const x in squadre){
    arrayNomiEFalli.push(squadre[x].falliSubiti,squadre[x].nome )
}

console.log(arrayNomiEFalli)