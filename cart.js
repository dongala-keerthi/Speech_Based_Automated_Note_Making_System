import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      setItems((prevItems) => prevItems.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      }));
    } else {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const updateQuantity = (item, quantity) => {
    setItems((prevItems) => prevItems.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity };
      }
      return i;
    }));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                  />
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(item)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
