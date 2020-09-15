const mysql = require('serverless-mysql')({
    config: {
        host: 'localhost',
        database: 'serverless',
        user: 'root',
        password: 'secret'
    }
})

module.exports.mysql = mysql;