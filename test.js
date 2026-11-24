// Runs offline inside the sandbox (no network): proves the app still loads and works after an upgrade.
const assert = require("assert");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const Handlebars = require("handlebars");
require("./index.js");

assert.strictEqual(_.escape("<b>"), "&lt;b&gt;");
const t = jwt.sign({ sub: "x" }, "k");
assert.strictEqual(jwt.verify(t, "k").sub, "x");
assert.strictEqual(Handlebars.compile("{{a}}")({ a: "ok" }), "ok");
console.log("all tests passed");
