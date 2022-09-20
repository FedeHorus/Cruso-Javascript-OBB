//objetos.js

let datos = 
    {nombre: 'Federico',
apellido: 'Acevedo',
edad: '28',
altura: 175,
eresDesarrollador: true,
}


let edad = datos.edad
console.log(edad)

let listanueva = [

    // { datos},
    {nombre: 'Federico',
apellido: 'Acevedo',
edad: '28',
altura: 175,
eresDesarrollador: true,
},
    {nombre: 'Miranda',
    apellido: 'Roca',
    edad: '27',
    altura : 168,
    eresDesarrollador: true,},
    {nombre: 'Marysol',
    apellido: 'Haedo',
    edad: '49',
    altura : 168,
    eresDesarrollador: true,}
    
]


console.log(listanueva[0]);

console.log(listanueva.sort((a,b) => b.edad - a.edad))

