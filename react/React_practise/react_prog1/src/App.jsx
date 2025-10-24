import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Product'


function App() {
  return <>
    <Item title="Electronics" features={246}></Item>
    <Item title="Dairy Produt"></Item>
    <h1>Hi React</h1>
    </>
  
}

export default App
