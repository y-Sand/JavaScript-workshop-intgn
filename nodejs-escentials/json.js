class Persona{
    constructor (nombre, apPaterno, apMaterno, email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}

let persona1 = new Persona("Carlos Ivan", "Chavez", "Fuentes", "carlos@gmail.com");
persona1.imprimePersona();
let persona2 = new Persona("Juan", "P", "P", "juan@gmail.com");
persona1.imprimePersona();
let persona3 = new Persona("Alicia", "C", "F", "alicia@gmail.com");
persona3.imprimePersona();

let personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3)

console.log(JSON.stringify(personas)); //convierte lo que pongas en parentesis a un formato Json

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(JSON.parse(text));