// Small web service: uses the dependencies so the reachability check sees them imported.
const express = require("express");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const Handlebars = require("handlebars");

const app = express();
const page = Handlebars.compile("<h1>Hello {{name}}</h1>");

app.get("/", (req, res) => res.send(page({ name: _.escape(req.query.name || "world") })));
app.get("/token", (req, res) => res.json({ token: jwt.sign({ sub: "demo" }, "dev-only-secret") }));

if (require.main === module) {
  app.listen(3001, () => console.log("demo app on http://localhost:3001"));
}
module.exports = app;
