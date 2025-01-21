import React from "react"
import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ItemList