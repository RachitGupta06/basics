import React from 'react';
import './App.css'
import Products from './components/Products';
const App = () => {
  const products =[
    {
      id: 'p1',
      title:'Nirma',
      amount:100,
      date: new Date(2021,8,10),
    },
    {
      id:'p2',
      title:'Sirf Excel',
      amount:200,
      date: new Date(2021,2,2)
    },
    {
      id: 'p3',
      title:'Tide',
      amount: 130,
      date: new Date(2021,12,28)
    },
    {
      id:'p4',
      title:'Ariel',
      amonunt:300,
      date:new Date(2021,4,7)
    },
  ]

  return (
    <div>
      <Products items={products}/>
    </div>
    
  );
}

export default App;
