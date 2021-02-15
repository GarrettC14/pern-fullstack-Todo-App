const express = require('express')
const app = express();
const cors = require("cors")
const {Pool} = require("pg")

//middleware
app.use(cors());
app.use(express.json()); //req.body


//connection to DB
const pool = new Pool({
    // user: "postgres", this is for windows, below for mac
    user: "daiyan",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

app.listen(5000, () => {
    console.log("server has started on port 5000!")
});

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
    try {   
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );
        res.json(newTodo.rows)        
    } catch(err){
        console.error(err.message)
    }
})

//get all todos

app.get("/todos", async (req, res) => {
    try{
        const results = await pool.query("SELECT * FROM todo")
        console.table(results.rows)
        res.send(results.rows)
    } catch(err) {
        console.error(err.message)
    }
})

//get a todo

app.get("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

//update a todo

app.put("/todos/:id", async(req, res) => {
    try{
        //remember we need two variables, ID and req.body which returns a new description
        const { id } = req.params;
        const { description } = req.body;
        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("todo was updated")
    }catch(err){
        console.error(err.message)
    }
})

//delete a todo

app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("todo was deleted")
    } catch(err) {
        console.error(err.message)
    }
})



//new topics to learn about
    //basic express recap
        //cors middleware?

    //pool ("pg") -> used to write queries for PSQL?

    //video for PG is bullshit and does not work, just use TypeORM for this

