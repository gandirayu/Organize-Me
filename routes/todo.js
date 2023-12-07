const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router
    .post("/add/todo", async (req, res) => {
        try {
        const { todo, deadline, description } = req.body;
        const newTodo = new Todo({ todo, deadline, description });

        // save the todo
        await newTodo.save();
        
        console.log("Successfully added todo!");
        res.redirect("/");
        } catch (err) {
        console.error(err);
        res.redirect("/");
        }
    })

    .get("/edit/todo/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findById(id);

            res.render("edit", { todo });
        } catch (err) {
            console.error(err);
            res.redirect("/");
        }
    })

    .post("/edit/todo/:id", async (req, res) => {
        try {
        const { id } = req.params;
        const { todo, deadline, description } = req.body;

        await Todo.findByIdAndUpdate(id, { todo, deadline, description });

        console.log("Successfully edited todo!");
        res.redirect("/");
        } catch (err) {
        console.error(err);
        res.redirect("/");
        }
    })

    .get("/delete/todo/:_id", (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
        .then(() => {
            console.log("Deleted Todo Successfully!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
    });

module.exports = router;