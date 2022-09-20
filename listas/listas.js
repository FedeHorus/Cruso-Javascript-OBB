
const listaDecompra= ["Tomate","sal","cafe","agua","fideos"]

console.log(listaDecompra);

listaDecompra.push("Aceite de Girasol" )

console.log(listaDecompra) ;

listaDecompra.pop()

console.log(listaDecompra)

let peliculas = [
    {titulo: "El 5to Elemento",
    director :"Luc Besson",
    fecha:"1994",

},
{titulo: "Riddick",
director :"Desconocido",
fecha:"2015",

},
{titulo: "Bronson",
director :"Guy Ritchie",
fecha:"2001",
}
];

let peliculas2010= peliculas.filter(pelicula => pelicula.fecha > 2010);
console.log(peliculas2010) // 


let directores = peliculas.map(pelicula => { return pelicula.director});
console.log(directores);
let titulos = peliculas.map(pelicula => { return pelicula.titulo});
console.log(titulos);

let concatenar = directores.concat(titulos);
console.log(concatenar)

let propagalista = [...directores,...titulos]
console.log(propagalista)
