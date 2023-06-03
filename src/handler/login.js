const fastifyJwt = require("fastify-jwt");
const config = require("../config");
const prisma = require("../../prisma");

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

exports.getUser = async (req, rep) => {
  const users = await prisma.tbl_users.findMany({
    take: 500,
  });
  return {
    success: true,
    message: "User Found Sucessfully",
    data: users,
  };
};
