import React, {Fragment, useState} from 'react'

const InputTodo = (props) => {

  const [description, setDescription] = useState("");

  //rough idea, when a change happens, pass the event target into a function here, which then uses setDescription to that value  

  return (
    <Fragment>
          <h1 className = "text-center mt-5">PERN todo app </h1>
          <form className = "d-flex mt-5">
            <input type="text" className = "form-control" value = {description} onChange = {e => 
              setDescription(e.target.value)}/>
            
            <button className = "btn btn-success">Add</button>
          </form>
    </Fragment>
  )
}

export default InputTodo


//update the description state value with the form above