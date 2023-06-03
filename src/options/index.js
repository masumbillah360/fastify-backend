const { successMsg, user } = require("./common");

exports.defaultOpts = {
  schema: {
    description: "Test Router",
    operationID: "TestRoutes",
    tags: ["TestRoutes"],
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
    description: "Login User",
    operationID: "Logins",
    tags: ["Login"],
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
            },
          },
        },
      },
    },
  },
};

exports.userSchema = {
  schema: {
    description: "User Details",
    operationID: "userDetails",
    tags: ["userDetails"],
    response: {
      200: {
        description: "OK",
        type: "object",
        properties: {
          ...successMsg("User Found Sucessfully"),
          data: {
            type: "array",
            items: {
              type: "object",
              ...user(),
            },
          },
        },
      },
      default: {
        description: "OK",
        type: "object",
        properties: {
          ...successMsg("User Found Sucessfully"),
          data: {
            type: "array",
            items: {
              type: "object",
              ...user(),
            },
          },
        },
      },
    },
  },
};
