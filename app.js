
const express=require('express');
const app=express();
app.use(express.json());
const path = require("path");

/*app.get("/", function(req,res){
    //res.send("Hola");
    res.sendFile(path.join(__dirname + "/public/index.html"))
});*/

app.get('/saludo', (req, res) => {
    res.send('¡Hola Mundo!');
  });
  
  app.get('/saludo2', (req, res) => {
    res.send("{'saludo' : 'Hola'}");
  });

  // Ejemplo de endpoint GET con parámetros
  app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola ${nombre}!`);
  });

  app.get('/persona', (req, res) => {
    const info = {
      nombre: 'Juan',
      edad: 28,
      profesion: 'Desarrollador de software'
    };
  
    res.json(info);
  });

  app.post('/suma/:numero1/:numero2', (req, res) => {
    const numero1 = parseInt(req.params.numero1);
    const numero2 = parseInt(req.params.numero2);
    console.log(numero1, numero2);
    const suma = numero1 + numero2;
  
    res.json({ resultado: suma });
  });

app.listen(3000, ()=> {
    console.log('server listening on port', 3000);
});