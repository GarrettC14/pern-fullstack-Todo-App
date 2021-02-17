import React, {Fragment} from 'react'
import './App.css';
import InputTodo from './components/InputTodo.js'

function App() {
  return (
   <Fragment>
     <div className = "container">
      <InputTodo/> 
     </div>
   </Fragment>
  );
}

export default App;
