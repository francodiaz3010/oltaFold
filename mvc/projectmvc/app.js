const expres = require ("express")
const app = expres()

app.get("/productos/:idProducto", function(req,res){
    res.send("Bienvenido al detalle del producto." + req.params.idProducto)
})

app.get("/productos/:idProducto/comentarios/:idComentario?", function(req, res){
    if (req.params.idComentario == indefined){
        res.send("Bienvenidos a los comentarios del producto" + req.params-idProducto + "y estas enfocado en el comentario" + req.params.idComentario)
    } else{
        res.send("Bienvenido a los comentarios del producto" + req.params.idProducto + "y estas enfocado en el comentarios " + req.params.idComentario0)
    }
})