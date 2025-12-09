import './App.css'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
// const dashboard = lazy(() => import('./component/dashboard')); 
// const landing = lazy(() => import('./component/landing'));
import Navbar from './component/Navbar';
import Products from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';


function App(){
  return (
        <BrowserRouter>
        <>
        <Navbar></Navbar>
        
          <Routes>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
          </Routes>
          </>
        </BrowserRouter>
        
//     <div>
      
//       {/* <div style={{background : "black", color:'white'}}>
//         Hi this is the main top bar
//       </div> */}
// {/*     
//     <BrowserRouter>
//     <Appbar></Appbar>
//       <Routes>
//           <Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route>
//           <Route path="/" element = {<Landing></Landing>}></Route>
//       </Routes>
//     </BrowserRouter> */}
//     </div>
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