const { todos } = require("../config/database");
module.exports = {
  getList: async (req, res) => {
    const todoList = await todos.findAll();

    res.send(todoList);
  },
  post: async (req, res) => {
    try {
      const item = await todos.create(req.body);
      res.send(`${item.todo} added to list`);
    } catch (error) {
      res.send("Todo has failed to add");
    }
  },
  update: async (req, res) => {
    try {
      await todos.update(req.body);
      res.send("Item updated");
    } catch (error) {
      res.send("Item has failed to update");
    }
  },
  remove: async (req, res) => {
    try {
      await todos.delete(req.params.id);
      res.send("Item deleted");
    } catch (error) {
      res.send("Item has failed to delete");
    }
  },
};
