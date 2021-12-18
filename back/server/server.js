const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')


const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
        origins: ['http://localhost:4200']
    }
})

app.use(express.json())

app.use(cors({
    origin: '*'
}));

app.use('/api/users', routes)

//socket io listens
const documents = [];
io.on("connection", socket => {
    socket.on("addDoc", doc => {
        documents.push(doc);
        io.emit("documents", Object.values(documents));
    });
    io.emit("documents", Object.values(documents));
});

http.listen(4444, () => {
    console.log('Socket listening on port 4444');
});
app.listen(process.env.PORT || '8080', () => {
    console.log(`Server running on port ${process.env.PORT || '8080'}`)
})