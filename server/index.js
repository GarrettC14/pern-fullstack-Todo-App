const express = require('express')
const app = express();
const cors = require("cors")
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


app.listen(5000, () => {
    console.log("server has started on port 5000 and is this updated? TEST")
});

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
    try {   
        console.log(req.body)
    } catch(err){
        console.error(err.message)
    }
})


//get all todos

//get a todo

//update a todo

//delete a todo




//new topics to learn about
    //basic express recap
        //cors middleware?

    //pool ("pg") -> used to write queries for PSQL?

