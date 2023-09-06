const { Database } = require("fakebase");

const db = new Database("./database/");
const todos = db.table("todos");

module.exports = { todos };
