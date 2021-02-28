import React,{useState, useEffect} from "react";
import Itemlist from "../components/Itemlist";
import Item from '../components/Item'

function Deals() {
  const [items, setItems] = useState([])

  useEffect(async () => {
    const response = await fetch("https://gp-super-store-api.herokuapp.com/item/list")
    const data = await response.json()
    setItems(data.items)
  }, [])

  const filter = items.filter((item) => item.isOnSale === true)

  if(filter.length === 0){
    return <h1>Sorry folks, nothing for sale today :(</h1>
  }
  
  return (
    <div>
      {items.filter((item) => item.isOnSale === true).map((item) => (
        <Item 
        name={item.name} 
        img={item.imageUrl} 
        price={"$" + item.price}
        onsale={item.isOnSale}
        starsNum={item.avgRating}
        stock={item.stockCount}
        id={item._id}
        />
      ))}
    </div>
  );
}

export default Deals;
