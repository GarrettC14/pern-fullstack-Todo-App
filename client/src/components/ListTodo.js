import React, {Fragment, useEffect, useState} from 'react'

import EditTodo from './EditTodo'

const ListTodo = () => {

//useEffect , useState

//useEffect - makes fetch request to restful API whenever this component is rendered

    const [todos, setTodos] = useState([])

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteTodo = async (id) => {
        try{
            const deleteTodo = await fetch (`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        }catch(err){
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    console.log(todos)

        return(
            <Fragment>
                <table className="table mt-5 text-center">
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {/*<tr>
                    <td>Description</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr> */}
                {todos.map(todo => (
                    <tr key = {todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                          <button className = "btn btn-danger" 
                            onClick = {() => deleteTodo(todo.todo_id)}>
                            Delete
                          </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
            </Fragment>
        )
}

//okay need to pass in the todo ID properpy... or, can use the index , remember though this is a FULL STACK app and
// we need to make a fetch request to delete the data from the backend 

//each todo needs to return the blue print up top

export default ListTodo

//well need to make a get request to the right http address which returns all todos

//step one - make the request then console.log it

//step two - render it to this component on the DOM

//step three - access the specific todo's, nothing else


//Updates with this version 
    //when pulling from DB
    //make a get request, convert from JSON, use setState (react hooks) to store data in state

    //from here, can render the data using a map function, map out JSX with data passed from state 


    //DELETE TODO logic
    //now that we have JSON data, we have access to the ID of each todo, which is auto-generated from DB
    //pass ID into the delete function, remember that single `` for the HTTP URL allow for JS objects
        //specify the delete request 
        //next issue is rendering the correct state
        //setTodos(todos.filter(todo => todo.todo_id !== id))
            //can use a filter function (which only returns elements in the array that return TRUE)