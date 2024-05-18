const consign = require("consign");
const app = require("express")();

consign({ cwd: __dirname })
    .include("database/sync.js")
    .then("routes")
    .into(app);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running"));
