const config = require("./config");
const { loginSchema, defaultOpts } = require("./options");
const auth = require("./controller/login");
const app = require("fastify")({ logger: true, bodyLimit: 200 * 1024 * 1024 });
app.register(require("fastify-jwt"), {
  secret: config.jwt_secret,
});
app.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Swagger",
    },
  },
});

app.get("/", defaultOpts, (req, rep) => {
  rep.status(200).send({
    success: true,
    message: "Server is running at http://localhost:8000",
  });
});
app.post("/login", auth.login);

module.exports = app;
