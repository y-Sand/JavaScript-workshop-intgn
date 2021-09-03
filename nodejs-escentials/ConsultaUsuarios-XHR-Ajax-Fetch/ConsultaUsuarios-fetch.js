let Id = "Id";
fetch(`https://jsonplaceholder.typicode.com/users/${Id}`)
.then(response => response.json())
.then(json => console.log(json.name), console.log(json.email));