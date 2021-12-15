const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use('/api/users', routes)

app.listen(process.env.PORT || '8080', () => {
    console.log(`server running on port ${process.env.PORT || '8080'}`)
})