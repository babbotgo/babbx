"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.status(200).send("Hello World!");
});
app.listen(process.env.PORT || 3000, function () {
  return console.log("Listening to port 3000, http://localhost:3000");
});
//# sourceMappingURL=index.js.map