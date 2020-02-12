const fs = require('fs')
const express = require('express')
const app = express()

require('../utils/load')
const { sort, sortCharacters, naira } = require('../utils/helper')

const port = process.env.PORT || 3000


app.get('/movies', (req, res) => {
    let movies = JSON.parse(fs.readFileSync('movies.json'))
    movies.forEach(movie => {
        movie.budgetInMillions = naira(movie.budgetInMillions)
        movie.boxOfficeRevenueInMillions = naira(movie.boxOfficeRevenueInMillions)
    })
    res.send(JSON.stringify(movies))
})

app.get('/movies/budget', (req, res) => {
    let order = req.query.order;

    let budget = JSON.parse(fs.readFileSync('movies.json'))
    let newArray

    newArray = sort(budget, 'budgetInMillions', order)
    newArray = JSON.stringify(newArray)

    res.send(newArray)
})

app.get('/movies/revenue', (req, res) => {
    const order = req.query.order;

    let revenue = JSON.parse(fs.readFileSync('movies.json'))
    let newArray

    newArray = sort(revenue, 'boxOfficeRevenueInMillions', order)
    newArray = JSON.stringify(newArray)

    res.send(newArray)
})

app.get('/movies/runtime', (req, res) => {
    let order = req.query.order

    let budget = JSON.parse(fs.readFileSync('movies.json'))
    let newArray

    newArray = sort(budget, 'runtimeInMinutes', order)
    newArray = JSON.stringify(newArray)

    res.send(newArray)
})

app.get('/characters', (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const max = (limit * page) - 1
    const min = limit * (page - 1)

    if ((page && !limit) || (!page && limit)) return res.status(404).send(`Please input a ${!limit ? 'limit' : 'page'}`)

    let characters = JSON.parse(fs.readFileSync('characters.json'))
    if (max >= 0 && min >= 0) {
        characters = characters.filter((character, index) => ((index >= min) && (index <= max)))
    }
    if (characters.length < 1) {
        return res.status(404).send('This page does not exist')
    }
    res.send(JSON.stringify(characters))

})

app.get('/characters/race', (req, res) => {
    let order = req.query.order
    let characters = JSON.parse(fs.readFileSync('characters.json'))
 
    characters = sortCharacters(characters, 'race', order)
    res.send(JSON.stringify(characters))

})

app.get('/characters/gender', (req, res) => {
    let order = req.query.order
    let characters = JSON.parse(fs.readFileSync('characters.json'))

    characters = sortCharacters(characters, 'gender', order)
    res.send(JSON.stringify(characters))

})


app.listen(port, () => console.log(`Server listening on port ${port}`))