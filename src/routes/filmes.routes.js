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


app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})