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
