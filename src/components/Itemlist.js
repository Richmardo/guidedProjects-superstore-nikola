import React ,{useState, useEffect} from 'react'
import Item from './Item'
import '../styles/ItemList.css'

function Itemlist() {
  const [items, setItems] = useState([])

  useEffect(async () => {
    const response = await fetch("https://gp-super-store-api.herokuapp.com/item/list")
    const data = await response.json()
    setItems(data.items)
  }, [])
  
  return (
    <div className="itemList">
      {items.map(item => (
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
  )
}

export default Itemlist
