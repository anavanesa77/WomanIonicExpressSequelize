module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define("collection", {
        articleID: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
    }
    );
    return Collection;
}