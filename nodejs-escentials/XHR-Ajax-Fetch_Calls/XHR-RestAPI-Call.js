// Set up our HTTP request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		//console.log('success!', xhr);
		let resultado = JSON.parse(xhr.responseText);
		resultado.forEach(post => {
				console.log(`Titulo: ${post.title} Body: ${post.body}`);
		})
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
//xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xhr.send();
