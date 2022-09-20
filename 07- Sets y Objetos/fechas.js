//fechas.js


let hoy= new Date();
console.log(hoy)

let fechaNacimiento = new Date(1994, 7, 26 )
console.log(fechaNacimiento)

let verificar = hoy.getTime() > fechaNacimiento.getTime();
console.log(verificar)

let diaNacimiento = fechaNacimiento.getDate();
let mesNacimiento = fechaNacimiento.getMonth();
let añoNacimiento = fechaNacimiento.getFullYear();

console.log(`Mi dia de nacimiento es ${diaNacimiento}, mi mes de nacimiento es ${mesNacimiento}, mi Año de nacimiento con 4 digitos es ${añoNacimiento}`)

