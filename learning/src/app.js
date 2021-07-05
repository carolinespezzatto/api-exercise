const express = require('express') 
const app = express() 
const cors = require('cors')

const alunos = [
    {
        nome: 'Aluno01',
        idade: 12
    },
    {
        nome: 'Aluno02',
        idade: 13
    },
    {
        nome: 'Aluno03',
        idade: 14
    },
    {
        nome: 'Aluno04',
        idade: 15
    }
]

app.use(cors())

app.get('/api/v1/alunos', function (req, res){
    res.send(alunos)
})  
app.listen(3000)