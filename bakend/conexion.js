
var mysql = require('mysql')

function EjecutarQuery(query) {
    var conn = mysql.createConnection(
        {
            host:'b6bl2rjmurqggzwy5hxj-mysql.services.clever-cloud.com',
            database:'b6bl2rjmurqggzwy5hxj',
            user:'u8dwh2dlbmywnopi',
            password:'NIyGEYQJHj8gow1NDN95'
           
            
        }
    )
    
    conn.connect((err) => {
        if (err) {
            console.error("Error de conexión:", err);
        } else {
            console.log("Base de datos conectada correctamente");
        }
    });
    conn.query(`${query}`,()=>{
        console.log('Query Creada');
    })
    
}


module.exports = {
    ejecutarquery:EjecutarQuery
}