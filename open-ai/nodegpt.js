const api_key = 'tu_api_key';
fetch('https://api.openai.com/v1/models', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${api_key}`
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  crearTabla(data);
})
.catch(error => console.error(error));

function crearTabla(data){
    var tabla = document.getElementById("tabla");
    console.log(data.data.length)
    var contenido = "";
    for (var i = 0; i < data.data.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + data.data[i].created + "</td>";
        contenido += "<td>" + data.data[i].id + "</td>";
        contenido += "<td>" + data.data[i].object + "</td>";
        contenido += "<td>" + data.data[i].owned_by + "</td>";
        contenido += "<td>" + data.data[i].parent + "</td>";
        contenido += "<td>" + data.data[i].permission + "</td>";
        contenido += "<td>" + data.data[i].root + "</td>";
        contenido += "</tr>";
    }
    tabla.innerHTML += contenido;
}
