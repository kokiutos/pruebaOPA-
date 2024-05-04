const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307, 
    password: '',
    database: 'numeros_perfectos_db'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos MySQL:', err);
        throw err;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});


app.use(express.json());


app.post('/api/perfect-numbers', (req, res) => {
    const perfectNumbers = req.body.perfectNumbers;


    const perfectNumbersString = perfectNumbers.join(',');

    const sql = 'INSERT INTO perfect_numbers (numbers) VALUES (?)';
    db.query(sql, [perfectNumbersString], (err, result) => {
        if (err) {
            console.error('Error al insertar números perfectos en la base de datos:', err);
            res.status(500).json({ error: 'Error al insertar números perfectos en la base de datos' });
            return;
        }
        console.log('Números perfectos insertados en la base de datos');
        res.status(200).json({ message: 'Números perfectos almacenados correctamente' });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
