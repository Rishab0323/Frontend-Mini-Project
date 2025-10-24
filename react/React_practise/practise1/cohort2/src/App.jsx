import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is anthony");

  function updateName(){
    setTitle("you score" +Math.random())
  }

  return (
    <div>
      <button onClick={updateName}>Generate</button>
      <Header  name={title}>this is the first heading</Header>
      <Header name="Shukla"> this is the second heading</Header>
    </div>
  )
}

function Header({name}){
  return <div>
    {name}
  </div>
}

export default App
