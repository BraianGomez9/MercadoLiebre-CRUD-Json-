const controlador = {
    index: (req, res) => {
        res.sendFile("home.html")
    },
    about: (req,res)=>{
        res.render("about.html")

    }
}

module.exports = controlador;