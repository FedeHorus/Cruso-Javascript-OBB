


class Estudiante{
    nombre= 'Federico';
    asignaturas = ['Javascript', 'HTML', 'CSS']

    obtenDatos(nombre, asignaturas){
        return {

        nombre : this.nombre,
        asignaturas:this.asignaturas

        }
    }
}

const estudiante = new Estudiante();

console.log(estudiante.obtenDatos())
