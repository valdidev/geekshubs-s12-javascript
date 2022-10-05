/* let x1 = ["X","X","O"];
let x2 = ["O","O","X"];
let x3 = ["O","X","O"];

let matriz = [x1, x2, x3];

for (let i = 0; i < matriz.length; i++) {
    // console.log(matriz[i])

    if (matriz[2][1] == "X") {
        console.log("bien")
    }
} */

// console.log(matriz[2][1])

let frutas = ["manzana", "plátano", "melocotón", "melón", "albaricoque"];
let bebidas = ["agua", "fanta", "vino", "ron", "cazalla"];

/* MÉTODOS DE ARRAY */

/* // push()
frutas.push("pera");
let bebidasFrutas = bebidas.concat(frutas);
console.log(bebidasFrutas); */

/* // join()
let joinFrutas = frutas.join(" - ");
console.log(joinFrutas); */

/* // reverse()
let numeros = [1,2,3,4];
numeros.reverse();
console.log(numeros); */

/* // filter()
let videojuegos = ["lost ark", "warframe", "lol", "wow", "metal slug"];
let posibles = videojuegos.filter(juego => juego != "lol");
console.log(posibles); */

/* // KATA - Letra del DNI - validación real
let numDNI = parseInt(prompt("Introduce el número de DNI"));
let letraDNI = prompt("Introduce la letra del DNI").toUpperCase();
const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
let modulo = numDNI % 23;
if (letrasDNI[modulo] == letraDNI) {
    console.log("El DNI es verdadero");
} else {
    console.log("El DNI es falso");
} */

/* // KATA - Sacar la letra del DNI
let numDNI = parseInt(prompt("Introduce el número de DNI"));
const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
let pos = numDNI % 23;

console.log(numDNI,letrasDNI[pos]) */

// ARRAY vs OBJETO
let carlos = ["Carlos", 27, "Valencia", "videojuegos"];

let alumnoCarlos = {
    nombre: "Carlos",
    edad: 27,
    ciudad: "Valencia",
    hobbie: ["videojuegos", "películas", "leer", "viajar"],
    amigos: {
        amigo1: "Jose",
        amigo2: "Marta",
        amigo3: {
            nombreAmigo3: "Mara",
            hobbiesAmigo3: {
                hobbieMara1: "Leer",
                hobbieMara2: "Pasear"
            }
        }
    }
}

console.log(carlos[2]);
console.log(alumnoCarlos);
console.log(alumnoCarlos.ciudad);
console.log(alumnoCarlos.amigos.amigo3);





