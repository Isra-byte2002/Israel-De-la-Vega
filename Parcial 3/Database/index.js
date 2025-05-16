const mysql2=require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'c21100487',
});

connection.query(
    'SELECT * FROM cusuario',
    function (err, results, fields){
        console.log(results);
        console.log(fields);
    }
);