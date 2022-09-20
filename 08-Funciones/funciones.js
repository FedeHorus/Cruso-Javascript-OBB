//08 - introduccion a las funciones

function sinParams(){
    return true
}

console.log(sinParams())

async function promesa(){
    let tiempo = setTimeout(() => console.log('Hola soy una promesa'), 5000)
}

function* indexPares(){
    let id = 0
    while (true){
        yield id
        id+=2       
        
    }
    return indexPares;
}

const gen = indexPares();

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())
