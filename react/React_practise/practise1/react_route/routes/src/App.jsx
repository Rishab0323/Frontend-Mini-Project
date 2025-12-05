import './App.css'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
const dashboard = lazy(() => import('./component/dashboard')); 
const landing = lazy(() => import('./component/landing'));

function App(){
  
  return (
    <div>
      
      {/* <div style={{background : "black", color:'white'}}>
        Hi this is the main top bar
      </div> */}
    
    <BrowserRouter>
    <Appbar></Appbar>
      <Routes>
          <Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route>
          <Route path="/" element = {<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}


function Appbar(){
  const navigate = useNavigate();
  return <>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
      </>
}

export default App