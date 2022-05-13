import React, { useState } from 'react'
import Card from './cards';
import Details from './details';


export default function App() {
    const [arr,setArray] = useState([
        {
            title: "ashfaq",
            id: 1111,
            price: 2223,
          
    
        },
        {
            title: "zahoor",
            id: 1233,
            price: 225456,
          
    
        },
        {
            title: "anwar",
            id: 1244,
            price: 2277,
          
    
        }
    ]);
    let addToCard = () => {
        setArray.map=(r)
        console.log(arr);
         function r(x){
           return x.title;
         }
       
    }
    return (
        <div className="App">
           <header className='App-header'>
               {arr.map((e)=>(
                   <Card title={e.title} price={e.price} id={e.id} action = {addToCard}/>
               ))}
           </header>
        </div>
    )
}
