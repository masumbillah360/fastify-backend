const config = require("./config");
const schema = require("./options");
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

app.get("/", schema.defaultOpts, (req, rep) => {
  rep.status(200).send({
    success: true,
    message: "Server is running at http://localhost:8000",
  });
});
app.post("/login",schema.loginSchema, auth.login);
app.get("/user",schema.userSchema, auth.getUser);

module.exports = app;
