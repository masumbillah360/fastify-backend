const loginHandler = require("../handler/login");

exports.login = async (req, rep) => {
    try {
        const login = await loginHandler.login(req, rep);
        rep.send(login);
    } catch (error) {
        rep.send({
            success: false,
            message: error.message || "Internal server error",
        });
    }
  
};

exports.getUser = async (req, rep) => {
  try {
    const getUser = await loginHandler.getUser(req, rep);
    rep.send(getUser);
  } catch (error) {
    rep.send({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
