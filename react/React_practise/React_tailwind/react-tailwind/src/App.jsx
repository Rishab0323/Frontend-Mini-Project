import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Component/RevenueCard'

function App() {

  return (
    <>
    <RevenueCard title={"amount pending"} amount={"92,230.23"} orderCount={"13"}/>
    </>
  )
}

export default App
