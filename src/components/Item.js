import React from "react";
import Stars from './Stars'
import "../styles/Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <Stars rating={props.starsNum}/>
      <p>In stock: {props.stock}</p>
      <div className="price">
        <p className="price">{props.price}</p>
        {props.onsale && <p className="onSale">ON SALE</p>}
      </div>
      <Link to={`/item/${props.id}`}>
        <button>VIEW ITEM</button>
      </Link>
    </div>
  );
}
export default Item;
