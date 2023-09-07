const createErrors = require("http-errors");
// 404 Not Found
function notFoundHandler(_req, _res, next) {
  next(createErrors(404, "404 Page Not Found"));
}

//default error handler
function errorHandler(err, _req, res, _next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (res.locals.html) {
    //html response
    res.render("error", {
      title: "404 Page Not Found",
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
