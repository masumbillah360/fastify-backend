exports.successMsg = (msg) => {
  return {
    success: { type: "boolean", default: true },
    message: { type: "string", default: msg },
  };
};

exports.user = () => {
  return {
    properties: {
      id: {
        type: "integer",
        default: 0,
      },
      user_id: {
        type: "string",
        default: "d2aa647f-9f3c-40a4-8757-38658c49a7d9",
      },
      email: {
        type: "string",
        default: "masum@gmail.com",
      },
      phone: {
        type: "string",
        default: "234234234",
      },
      first_name: {
        type: "string",
        default: "Masum",
      },
      last_name: {
        type: "string",
        default: "billah",
      },
      profile_image: {
        type: "string",
        default: "www.upload-image.jpg",
      },
      created_at: {
        type: "string",
        default: "2023-05-31T12:20:43.936Z",
      },
      updated_at: {
        type: "string",
        default: "2023-05-31T12:20:43.936Z",
      },
    },
  };
};
