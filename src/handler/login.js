const fastifyJwt = require("fastify-jwt");
const config = require("../config");

exports.login = async (req, rep) => {
  const { email, password } = req.body;
  const token = await rep.jwtSign(
    { user_id: email },
    { secret: config.jwt_secret }
  );
  return {
    success: true,
    message: "Login successful",
    data: {
        token,
    },
  };
};
