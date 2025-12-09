import { useParams } from "react-router-dom";
import products from "../Data/Product";

function ProductDetails(){
    const {id} = useParams();

    const product = products.find(p => p.id ===Number(id));

    if(!product){
        return <h2>Product Not found</h2>;
    }

    return(
        <div>
            <h1>Product Details</h1>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
        </div>
    )
}

export default ProductDetails;