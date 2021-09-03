$( document ).ready(function() {
    let endpoint = "https://jsonplaceholder.typicode.com/posts/50"
    // let endpoint = 'https://api.linkpreview.net'
    // let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'
  
    //$( ".content a" ).each(function( index, element ) {
    
        $.ajax({
            url: endpoint,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            //result nombre del objeto que le quieras poner al resultado
            success: function(result){
                console.log(result);
            },
            //que hacer cuando falla la llamada 
            erorr: function(result){
                console.log("La llamada no se pudo completar");
                console.log(result);
            }
        })
        
    // Peticion con key y el tipo de respuesta
    //   $.ajax({
    //       url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
    //       contentType: "application/json",
    //       dataType: 'json',
    //       success: function(result){
    //           console.log(result);
    //       }
    //   })
    //});
  });
  