import React, {Fragment, useState} from 'react'

const InputTodo = (props) => {

  const [description, setDescription] = useState("");

  //rough idea, when a change happens, pass the event target into a function here, which then uses setDescription to that value  

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try{
      const body = {description};
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(body)
      });
      //by default, fetch makes a get request, so need to specify if the method is different
        //then there is headers - I do not know what this is
          //then we need to stringify the data (body?)

      window.location = "/";

    } catch(err){
      console.error(err.message)
    }
  }

  //async passes in an event, then calling e.preventDefault to stop a refresh

  return (
    <Fragment>
          <h1 className = "text-center mt-5">PERN todo app </h1>
          <form className = "d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className = "form-control" value = {description} onChange = {e => 
              setDescription(e.target.value)}/>
            
            <button className = "btn btn-success">Add</button>
          </form>
    </Fragment>
  )
}

//one way to call the logic above is for the button to run onSubmitForm, but there is an alternative

//the form JSX object has a built in enter and button listener, so it knows to run code when enter or the button is clicked, without manually setting is up. thats pretty cool



export default InputTodo


//update the description state value with the form above

//next we want to submit a form to send data to FB

//when dealing with HTTP or DB connection, can set up a function, and within the function call
  //try catch, async, res, rep