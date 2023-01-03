const pool = require('./conexion')

const showing = async () => {

    try {
        const { rows } = await pool.query('SELECT * FROM posts;')
        return rows
    }
    catch (e) {
        console.log(e)
    }
}

const posting = async (titulo, img, descripcion, likes) => {
    try {
        const command = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4);'
        const values = [titulo, img, descripcion, likes]
        await pool.query(command, values)
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {showing, posting}