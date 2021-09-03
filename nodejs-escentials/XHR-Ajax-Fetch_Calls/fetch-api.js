fetch('https://jsonplaceholder.typicode.com/users') //ve por esta ruta
.then(response => response.json())
.then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos', {
    //mandarle los campos y sus valores para el post
    //analogamente se haria para el shr y ajax
    method: 'POST',
    body: JSON.stringify({
        title: "Wash the disshes",
        completed: false
    }),
    headers:{
        "Content-type": "application/json"
    }
})
.then(response => response.json())
.then(json => console.log(json));

async function getUser(id) 
{
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json()
    return data;
}

// No la podemos llamar directamente porque es una funcion asyncrona
// let usuario = await getUser(10);
// consolee.log(usuario.name);

getUser(10).then(data => console.log(data));