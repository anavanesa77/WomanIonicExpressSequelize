module.exports = app => {
    const articles = require("../controllers/article.controller");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", upload.single('file'), articles.create);
    router.post("/", articles.create);
    router.get("/", articles.findAll);
    router.get("/:collection", articles.findOne);
    router.put("/:id", articles.update);
    router.delete("/:id", articles.delete);

    app.use("/api/article", router);
}
