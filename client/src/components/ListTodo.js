import React, {Fragment, useEffect, useState} from 'react'

const ListTodo = () => {

//useEffect , useState

//useEffect - makes fetch request to restful API whenever this component is rendered

const getTodos = async() => {
    try {

    const response = await fetch("http://localhost:5000/todos");
    const jsonData = await response.json();

    console.log(jsonData)

    } catch (err) {
        console.error(err.message)
    }
}

useEffect(() => {
    getTodos();
})


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
              </tbody>
            </table>
        </Fragment>
    )
}

//each todo needs to return the blue print up top

export default ListTodo

//well need to make a get request to the right http address which returns all todos

//step one - make the request then console.log it

//step two - render it to this component on the DOM

//step three - access the specific todo's, nothing else