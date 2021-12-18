const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use('/api/users', routes)

app.listen(process.env.PORT || '8080', () => {
    console.log(`server running on port ${process.env.PORT || '8080'}`)
})