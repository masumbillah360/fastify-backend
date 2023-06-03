const { successMsg } = require("./common");

exports.defaultOpts = {
  schema: {
    response: {
      200: {
        description: "OK",
        type: "object",
        properties: {
          ...successMsg("Server is running at http://localhost:8000"),
        },
      },
    },
  },
};

exports.loginSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        email: { type: "string", default: "masum@billah.com" },
        password: { type: "string", default: "password" },
      },
      required: ["email", "password"],
    },
    response: {
      200: {
        description: "OK",
        type: "object",
        properties: {
          ...successMsg("Login successful"),
          data: {
            type: "object",
            properties: {
              token: { type: "string", default: "jwt-token" },
              decoded: {
                type: "object",
                properties: {
                  user_id: { type: "string" },
                  iat: { type: "integer" },
                },
              },
            },
          },
        },
      },
      default: {
        description: "OK",
        type: "object",
        properties: {
          ...successMsg("Login successful"),
          data: {
            type: "object",
            properties: {
              token: { type: "string", default: "jwt-token" },
              decoded: {
                type: "object",
                properties: {
                  user_id: { type: "string" },
                  iat: { type: "integer" },
                },
              },
            },
          },
        },
      },
    },
  },
};
