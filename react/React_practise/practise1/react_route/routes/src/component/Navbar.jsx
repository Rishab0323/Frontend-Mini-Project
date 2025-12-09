import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav style={{display:"flex", gap:"20px"}}>
            <Link to="/products">Products</Link>
        </nav>
    )
}

export default Navbar;