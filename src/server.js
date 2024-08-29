import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT  || 3000 

const app = express() 

app.use(express.json())

const guloseimas = [
    {
        id:1,
        nome:"Trufa",
        preco:8.50
    },
    {
        id:2,
        nome:"Sorvete",
        preco:25.00
    },
    {
        id:3,
        nome:"Pacoca",
        preco:1.00
    }
]

const filmesMarcantes = [
    {
        id:1001,
        titulo:"high school musical",
        genero: "musical",
        emCartaz: false
    },
    {
        id:1002,
        titulo:"truque de mestre",
        genero: "drama",
        emCartaz: false
    },
    {
        id:1003,
        titulo:"barbie",
        genero: "fantasia",
        emCartaz: false
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas)
})
app.post("/doces", (req, res) => {
    const {nome,preco} = req.body 

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco
    }

    guloseimas.push (novoDoce)
    return res.status(201).send(guloseimas)
})


app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})


app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`)
})