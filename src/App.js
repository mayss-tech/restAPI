import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetchItems()
  }, []);
  const [items,setItems]=useState([])
  const fetchItems = async () => {
  const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=635f7de37a6610e7bbed83e2aedb1b5b')
  const items = await data.json()
  console.log(items)
  setItems(items)

}
  return (
    <div >
      {/* {items.map(el=><p>{el.name}</p>)} */}
  
    </div>
  );
}

export default App;
