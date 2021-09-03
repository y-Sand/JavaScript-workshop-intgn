$( document ).ready(function() {
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    $("#search").click(function() {
        let idBusqueda = $("#Id").val();
      $.ajax({
          url: endpoint + "/" + idBusqueda,
          contentType: "application/json",
          dataType: 'json',
          success: function(result){
              $("#textName").val(result.name);
              $("#textEmail").val(result.email);
          },
          error: function(result){
            console.log("Sin exito");
            console.log(result);
        }
      })
    });
  });