const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'EASYch4t!P4ss#',
    user: 'easyChatUser',
    database: 'easy_chat_db',
    host: 'localhost',
    port: '3306'
})

let usersdb = {};

usersdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

usersdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}

module.exports = usersdb;