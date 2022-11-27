import "./ProductCard.css";
// import products from "../products/Products";

function ProductCard(props) {
    return (
        <article className="productCard">
            <div className="imgContainer">
                <img alt={props.alt} src={props.url} />
            </div>
            <h2 className="productName">{props.name}</h2>
            <p className="price">{props.price}</p>
            <button className="btn">BUY NOW</button>
        </article>
    );
}
export default ProductCard;