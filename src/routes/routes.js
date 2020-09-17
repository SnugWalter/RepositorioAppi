const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.send("<h1> Mi primera API </h1>");
});

router.get("/", (req, res) => {
  res.send("<h1> Hola Walter </h1>");
});

module.exports = router;
