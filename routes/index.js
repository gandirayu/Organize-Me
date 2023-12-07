const router = require("express").Router()
const Todo = require("../models/Todo");

// routes will be here....
router.get("/", async (req, res) => {
    try {
        const allTodo = await Todo.find();
        res.render("index", { todo: allTodo.map(todo => ({...todo._doc, deadline: todo.deadline.toISOString().slice(0, 16)})) });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;