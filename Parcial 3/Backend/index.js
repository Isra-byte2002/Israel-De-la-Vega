const express = require('express');
const app = express();

app.use( express.json());
app.use( express.text());

app.get('/peliculas', (req, res)=>{
    console.log(req.query)
    console.log(req.query.id)
    res.send("Servidor Express contesteando a una peticion get");
});

app.post('/peliculas/:id', (req, res)=>{
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

