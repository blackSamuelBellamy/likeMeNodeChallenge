const { Pool } = require('pg')

const credentials = {
    host: 'postgresql-blacksam.alwaysdata.net',
    user: 'blacksam',
    password: 'blacksam1234..',
    database: 'blacksam_likeme',
    port: 5432,
    allowExitOnIdle: true
}

const pool = new Pool(credentials)

module.exports = pool