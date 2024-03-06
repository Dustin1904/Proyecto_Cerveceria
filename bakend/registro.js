const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); 


router.post('/register', (req, res) => {
    const { nombre, appellido , usuario, pass ,  } = req.body;

    const query = `INSERT INTO usuarios(nombre,apellido,usuario,pass) VALUES(${nombre}, ${appellido} , ${usuario} , ${pass})`;
    conexion.ejecutarquery(query, (err, result) => {
        if (err) {
            console.error("Error al ejecutar la consulta:", err);
            res.status(500).json({ error: "Error interno del servidor" });
        } else {
            if (result.length > 0) {
                res.json({ message: "Inicio de sesión exitoso" });
            } else {
                res.status(401).json({ error: "Credenciales inválidas" });
            }
        }
    });
});

module.exports = router;
