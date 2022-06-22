const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root', 
    host: 'localhost',
    password: '',
    database: 'db_emioliocarlos',
});

app.post('/create', (req, res) => {
    const attDate = req.body.attDate; 
    const bornDate = req.body.bornDate; 
    const age = req.body.age; 
    const gender = req.body.gender; 
    const city = req.body.city; 
    const breast = req.body.breast; 
    const state = req.body.state; 
    const description = req.body.description; 

    db.query(
        "INSERT INTO tbl_pessoascadastrocampanha (dataatualizacao, datadenascimento, idade, genero, cidade, posicaomama, estado, descricao) VALUES (?,?,?,?,?,?)",
        [attDate, bornDate, age, gender, city, breast, state, description],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("fields filled")
            }
        }
    )
});

app.listen(3001, () => {
    console.log("in");
});