const router = require("express").router()
const movieController = require("../controllers/movie")

router.get("/", movieController.getAll)


module.exports = router