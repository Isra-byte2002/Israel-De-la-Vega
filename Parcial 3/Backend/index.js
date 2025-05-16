const express = require('express');
const app = express();
var morgan = require('morgan');
const cors = require('cors');

app.use( express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({extended:true,}))

app.get('/peliculas', (req, res)=>{
    console.log(req.query.id)
    res.send("Servidor Express contestando a una peticion get");
});

app.post('/peliculas/:id', (req, res)=>{
    console.log(req.body);
    res.send("Servidor Express contestando a post");
});

app.patch('/peliculas', (req, res)=>{
    res.send("Servidor Express contestando a patch");
});

app.delete('/peliculas', (req, res)=>{
    console.log(req.params);
    res.send("Servidor Express contestando a peticion delete");
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

