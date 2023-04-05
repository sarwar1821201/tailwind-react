import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

   useEffect( ()=>{
      fetch('prices.json') 
      .then(res=> res.json())
      .then(data=> setPrices(data))

   },[])

    return (
        <div className='mx-12 py-4'>
            <h1 className='text-5xl text-center text-purple-950 bg-purple-400 font-bold p-4 py-4'>Awesome Affordable PriceList</h1>
     
    <div className='grid md:grid-cols-3 gap-4'>
    {
        prices.map(price => <PriceCard
          
            key= {price.id}
            price={price}
            
        ></PriceCard>)
     }
    </div>

        </div>
    );
};

export default PriceList;