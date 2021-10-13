let express = require('express')
let app = express()

let home = ((req, res) => {
    res.send('Welcome to the starting page.')
})

let about = ((req, res) => {
    res.send('Hi, this is Jillian.')
})

let contact = ((req, res) => {
    res.send('Here is an email.')
})

let projects = ((req, res) => {
    res.send('Fancy shiny projects page')
})

app.get('/', home)
app.get('/home', home)

app.get('/about', about)

app.get('/contact', contact)

app.get('/projects', projects)

app.listen(3000, () => console.log('Express is up and running at port 3000!'))