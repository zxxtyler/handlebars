const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') //colocar uma variavel que armazena temporariamente

app.get('/', (req, res) => { //associa uma propriedade a uma função

    const user = {
        name: 'tyler',
        age: 17,
        email: 'tyler@gmail.com'
    }
    res.render('home', {user: user}) //envia dados do home para armazenamento em nuvem
})



app.listen(3000)