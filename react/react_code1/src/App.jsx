import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function handle(){
//   alert("Hi Rishab");
// }

function App() {

  const [todos,setTodos] = useState([{
    title: "Go to gym",
    description: "focus fitnes",
    complete: "false"
  },
  {
    title: "Go to gym",
    description: "focus fitnes",
    complete: "false"
  }
]);

  return (
      <div className="card">
       <Todo title={todos[0].title} description={todos[0].description}></Todo>
       <Todo title={title[1].title} description={todos[1].description}></Todo>
      </div>
      
  )  
}

function Todo(prop){
  return (<div>
    <h3>title.prop</h3>
    <head>description.prop</head>
  </div>
  )
}

export default App
 