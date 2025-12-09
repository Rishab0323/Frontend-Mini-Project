import { Link } from "react-router-dom";
import products from "../Data/Product";

function  Products(){
    return (
        <div>
            <h1>All products</h1>
            
            {products.map((p) => (
                <div key={p.id} style={{margin : "10px 0"}}>
                    <h3>{p.name} - ₹{p.price}</h3>

                    {/* Dynamic link */}
                    <Link to={`/products/${p.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}

export default Products;