const { showing, posting, like, erase } = require('../services/indexServices')

const methodController = {
    show: async (req, res) => {
        try {
            const posts = await showing()
            res.status(200).json(posts)
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }

    },

    create: async (req, res) => {
        try {
            const { titulo, url, descripcion} = req.body
            const posts = await posting(titulo, url, descripcion)
            res.status(201).json(posts)
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    },

    modify: async (req, res) => {
        try {

            const { id } = req.params
            const posts = await like(id)
            res.status(200).json(posts)

        } catch (e) {
            console.log(e)
            res.status(500)
        }
    },

    erase: async (req, res) => {
        try {
            const { id } = req.params
            const posts = await erase(id)
            res.status(200).json(posts)

        } catch(e) {
            console.log(e)
            res.status(500)
        }
    }
}

module.exports = methodController