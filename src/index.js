import alumno from "./models/alumno.js"
import {PI,sumar, restar, multiplicar, dividir, array} from "./modules/matematica.js";
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
import axios from "axios";
import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
const app = express();
const port = 3000;

app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

app.get('/', (req, res) => {
    res.status(200).send("¡Ya estoy respondiendo!");
});
app.get('/saludar/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.status(200).send('Hola ' + nombre);
});
app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
const ano = req.params.ano;
const mes = req.params.mes;
const dia = req.params.dia;
const fecha = new Date(`${ano}-${mes}-${dia}`);
if(isNaN(Date.parse(fecha))) res.status(400).send('Fecha invalida');
else res.status(200).send('Fecha valida');
});
app.get('/matematica/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const suma = sumar(n1, n2);
    res.status(200).send(`${suma}`);
});
app.get('/matematica/restar', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const resta = restar(n1, n2);
    res.status(200).send(`${resta}`);
});
app.get('/matematica/multiplicar', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const multiplicacion = multiplicar(n1, n2);
    res.status(200).send(`${multiplicacion}`);
});
app.get('/matematica/dividir', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const division = dividir(n1, n2);
    res.status(200).send(`${division}`);
});
app.get('/omdb/searchbypage', (req,res) => {
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
