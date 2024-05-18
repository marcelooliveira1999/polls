const consign = require("consign");
const app = require("express")();

consign({ cwd: __dirname })
    .include("routes")
    .into(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running"));
