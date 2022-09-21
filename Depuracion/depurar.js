

function fibonacci(num){
    let lista= [1,1]
    for (let i = 2; i < num; i++){
       
        
        let ingresa1 = lista[ i -1/*1*/] + lista[i -2]
        
        lista.push(ingresa1)
    }
    return lista
}

console.log(fibonacci(12))
