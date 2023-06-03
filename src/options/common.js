exports.successMsg = (msg) => {
  return {
    success: { type: "boolean", default: true },
    message: { type: "string", default: msg },
  };
};
