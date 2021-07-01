// const express = require('express')
// const app = express()
// const port =  3000

// const routes = require('./routes')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use(express.json())

// app.use(routes)

// app.listen(port, () => {
// console.log(`Example app listening at localhost:${port}`)
// })

// module.exports = app


const express = require('express')
const app = express()


const routes = require('./routes')

app.get('/', (req, res) => {
    
})
app.use(express.json())

let compras = [];

app.use(routes);

module.exports = app;