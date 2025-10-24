import Price from "./Price";

function Item({title,features}){
    let oldPrice = ["499","699","999"];
    let newPrice = ["399","599","799"]
    return <>
        <p>{title}</p>
        <p>features: {features}</p>
        <Price></Price>
    </>
}

export default Item;