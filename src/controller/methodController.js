const { showing, posting } = require('../services/servicesQuery')

const methodController = {

    show: async (req, res) => {

        try {
            const posts = await showing()
            res.json(posts)
        }
        catch (e) {
            console.log(e)
        }

    },

    create: async (req, res) => {

        try {
            const { titulo, url, descripcion, likes } = req.body
            const posts = await posting(titulo, url, descripcion, likes)
            res.json(posts)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = methodController