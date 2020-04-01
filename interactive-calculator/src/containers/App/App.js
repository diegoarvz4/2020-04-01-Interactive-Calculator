import React, { useState, useEffect } from 'react';
import BugetSet from '../BugetSet/BudgetSet';
import ItemsForm from '../ItemsForm/ItemsForm';
import './App.scss';

const App = () => {

  const [budget, setBudget] = useState(100.0);
  const [split, setSplit] = useState(1);

  const [items, setItems] = useState([{
    concept: 'Yoshi Custom',
    price: 1000,
    priority: 100
  }])

  useEffect(() => {
    setItems( prevItems => sortByPriority(prevItems))
  }, [items.length])

  const sortByPriority = (arr) => [...arr].sort((a,b) => b.priority - a.priority);
  

  const getEstimatedTimeToPay = () => {
    const budgetPerMonth = budget / split;
    const total = items.reduce((a,b) => a.price + b.price)
    return isNaN(total) ? '' : `Total of months to pay everying: ${total / budgetPerMonth }`
  }


  return (
    <div className="App">
      <h1>I-Wanna-Buy Calculator</h1>
      <BugetSet budget={budget} split={split} setBudget={setBudget} setSplit={setSplit}/>
      <hr />
      <ItemsForm setItems={setItems} />
      <hr />
      <div>
        <h2>List Items</h2>
        <table style={{width: '100%'}}>
              <tr>
                <th>Concept</th> 
                <th>Price</th> 
                <th>Priority</th>
                <th></th>
              </tr>
        {
          
          items.map((item, idx) => (
            
              <tr key={item.concept + idx}>
                <td>{item.concept}</td> 
                <td>{item.price}</td> 
                <td>{item.priority}</td>
                <td><button onClick={(e) => {
                  e.preventDefault();
                  const concept = item.concept;
                  setItems(prevItems => {
                      return prevItems.filter(itm => itm.concept !== concept)
                    }
                  )
                }}>-</button></td>
              </tr>

          ))
        }
                      
        </table>
      </div>
        <hr />
      <div>
        <h2>Buying Plan</h2>
        {
          getEstimatedTimeToPay()
        }
      </div>


      
    </div>
  );
}

export default App;
