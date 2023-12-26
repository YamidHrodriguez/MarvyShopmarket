const express = require('express');
const path = require('path'); // Módulo para trabajar con rutas de archivos
const app = express();
const csv = require('csv-parser');
const port = 1111;
const fs = require('fs');
const bodyParser = require('body-parser');
const { verify } = require('crypto');
const mysql = require('mysql');
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

function registrarUser(id,tabla,tipo,dataToAdd,res,connection){
  // Realizar la consulta de inserción
  console.log(tipo)

 const sql = `INSERT INTO ${tabla} (${tipo}Id,${tipo}Usuario,${tipo}Contraseña,${tipo}Correo) VALUES (?, ?, ?, ?)`;
 const values = [id, dataToAdd.username, dataToAdd.password, dataToAdd.email];
 
 connection.query(sql, values, (error, results) => {
   if (error) {
     console.error('Error al insertar en la base de datos:', error);
     res.status(500).send('Error interno del servidor');
   } else {
     console.log('Registro agregado a la base de datos con éxito');
     return res.redirect("/home");
   }
 });
}

function registrarTienda(tabla,tipo,dataToAdd,res,connection){
  const sql = `INSERT INTO ${tabla} (${tipo}Id,${tipo}Nombre,${tipo}Contacto,${tipo}Ubi) VALUES (?, ?, ?, ?)`;
  const values = [dataToAdd.id, dataToAdd.name, dataToAdd.tel, dataToAdd.ubicacion];
  
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error al insertar en la base de datos:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Registro agregado a la base de datos con éxito');
      return res.redirect("/home");
    }
  });  
}


function verifyUser(dataToAdd,res,connection){
  const sql = `SELECT ${ten_Usuario} FROM ${Tendero}`;
  // const values = [dataToAdd.id, dataToAdd.name, dataToAdd.tel, dataToAdd.ubicacion];
  
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error al insertar en la base de datos:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log(`Registro agregado a la base de datos con éxito: ${sql}`);
      return res.redirect("/home");
    }
  });
}



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
    res.sendFile(path.join(__dirname, 'views', 'loading.html'));
});

app.get('/redirigir-login'),(res,req)=>{
  setTimeout(function() {
    res.redirect("/login");
    window.alert("Han pasado 5 segundos, Bienvenid@ a Marvy Shopmarket :3");
}, 5000);
}
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.post('/procesar-datos', (req,res) => {
   // Obtener el valor del input desde la solicitud
  const user_Name  = req.body.usuario_singUp;
  const user_Password = req.body.usuario_singUp;
  const user_Correo = req.body.email_singUp;
  const tienda_Nom = req.body.nombre_tienda;
  const tienda_Id = req.body.id_tienda;
  const tienda_Tel = req.body.contacto_tienda;
  const tienda_Ubi = req.body.ubi_tienda;

  const dataToAddUser = {
    username: user_Name,
    password: user_Password,
    email: user_Correo
  }
  const dataToAddTienda = {
    name: tienda_Nom,
    id: tienda_Id,
    tel: tienda_Tel,
    ubicacion: tienda_Ubi
  }

  // Log de los datos para verificar
  console.log(req.body, dataToAddUser, dataToAddTienda);
  registrarUser(0,"Tendero","ten_",dataToAddUser,res,connection);
  registrarTienda("Tienda","tien_",dataToAddTienda,res,connection)
  
});

app.post('/redirigir-registros', (req, res) => {
  // Obtener el valor del input desde la solicitud
  return res.redirect('/registrarse');
});
app.get('/registrarse', (req,res) =>{
  res.sendFile(path.join(__dirname, 'views', 'registro.html'));
})
app.post('/comprobar',(req,res)=>{
  const user = req.body.user;
  const password = req.body.password;
  const dataToVerify= {
    user: user,
    password: password
  }
  console.log(req.body,dataToVerify)
  // verifyUser('ten_Usuario','Tendero',dataToVerify,res,connection)
  return res.redirect("/home");
});

app.get('/home',(req,res) =>{
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/login',(req,res) =>{
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})