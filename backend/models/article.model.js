module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        collection: {
            type: Sequelize.STRING
        },
    }
    );

    return Article;
}
