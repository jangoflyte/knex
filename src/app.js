// app.js
const express = require("express");
const { application_name } = require("pg/lib/defaults.js");

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

app.use(express.json());

app.get("/", function(req, res) {
    res.status(200).send('Hello, world!');
});

app.get("/movies", function (req, res) {
  knex
    .select("*")
    .from("movies")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.get("/theater", function (req, res) {
  knex
    .select("*")
    .from("theater")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
