const app = require("./src/api");
const config = require("./src/config");
const port = config.port;
app.listen(port);