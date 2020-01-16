const express = require('express');
const mysql = require('mysql');
const app = express();
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'marcelo272',
    database: 'miBase'
    
});
conexion.connect((error)=>{
    if(!!error){
        console.log('error');
    }else{
        console.log('escuchando')
    }
});
app.get('/',(req, resp)=>{
    conexion.query("SELECT * FROM  books", function(error, rows, field){
        //AQUI VA NUESTRO CALLBACK
        if(!!error){
            console.log('error el query esta vacio')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});
app.listen(1337)