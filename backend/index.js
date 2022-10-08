const express = require("express");
const cors = require("cors");

const app = express();


//app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch((err) => {
        console.log("Base de datos no conectada");
    });

app.get("/", (req, res) => {
    res.json({ message: "Bienvenida a tu tienda de moda." });
});

require("./routes/article.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}.`);
});
