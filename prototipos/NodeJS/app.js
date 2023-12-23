const express = require('express');
const path = require('path'); // Módulo para trabajar con rutas de archivos
const app = express();
const csv = require('csv-parser');
const port = 1111;
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Configurar el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Establecer la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configurar Express para servir archivos estáticos desde la carpeta 'data'
app.use('/data', express.static(path.join(__dirname, 'data')));

// Establecer el motor de vistas (opcional si usas un motor de plantillas como EJS o Pug)
app.set('view engine', 'html');

// Configurar middleware para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


app.post('/redirigir', (req, res) => {
  // Configura la conexión
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nidian56',
    database: 'Marvy_Shopmarket'
  });

  // Conéctate a la base de datos
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL:', err);
    } else {
      console.log('Conexión exitosa a MySQL');
      // Ahora puedes realizar consultas
    }
  });
  res.redirect('/registros');
});


app.get('/registros', (req, res) => {
    // Obtener el valor del input desde la solicitud
    res.sendFile(path.join(__dirname, 'views', 'registro.html'));
});