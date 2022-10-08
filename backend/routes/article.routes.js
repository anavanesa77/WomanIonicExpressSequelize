module.exports = app => {
    const articles = require("../controllers/article.controller");

    var router = require("express").Router();

    router.post("/", articles.create);
    router.get("/", articles.findAll);
    router.get("/:id", articles.findOne);
    router.put("/:id", articles.update);
    router.delete("/:id", articles.delete);

    app.use("/api/article", router);
}
