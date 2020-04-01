import React, { useState } from 'react';

export default ({ setItems} ) => {

  const [item, setItem] = useState({
    concept: '',
    price: 0,
    priority: 1, 
   })

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        setItems((prevItems) => [...prevItems, item])
      }}>
      <h2>Add Item</h2>
      <label htmlFor='concept'>Concept</label>
      <input 
        name="concept"
        type="text"
        value={item.concept}
        onChange={(e) => {
          const value = e.target.value;
          setItem(prevItem => {
              return {...prevItem, concept: value}
            }
          )
        }}
      />

      <label htmlFor='price'>Price</label>
      <input 
        name="price"
        type="number"
        value={item.price}
        onChange={(e) => {
          const value = e.target.value;
          setItem(prevItem => {
              return {...prevItem, price: parseFloat(value)}
            }
          )
        }}
      />

      <label htmlFor='priority'>Priority</label>
      <input 
        name="priority"
        type="number"
        value={item.priority}
        onChange={(e) => {
          const value = e.target.value
          setItem(prevItem => {
              return {...prevItem, priority: parseInt(value)}
            }
          )
        }}
      />
      <button type="submit">Add</button>
    </form>
  )
}