import React, { useState } from 'react';

const ItemCount = ({ onAddToCart, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => setQuantity(e.target.value);

  const handleAdd = () => {
    if (quantity <= stock) {
      onAddToCart(quantity);
    }
  };

  return (
    <div>
      <input type="number" value={quantity} onChange={handleChange} min="1" max={stock} />
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;