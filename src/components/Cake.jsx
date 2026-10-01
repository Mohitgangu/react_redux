import React, { useState } from 'react';
import { RESTOCK_CAKE, BUY_CAKE } from '../utils/redux/store';
import { store } from '../utils/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Cake = () => {

    const[q,setQ]=useState(0)
    const dispatch= useDispatch()
   const {numOfCakes} = useSelector((store) => {
        return store
    })

  return (
    <div>
      <h2>NUM of cakes:{numOfCakes}</h2>
      <input onChange={(e)=>setQ(e.target.value)} type="text" />
     <button onClick={() => {
            dispatch(BUY_CAKE(q))
        }}>Buy Cake</button>
      <button onClick={()=>{dispatch(RESTOCK_CAKE())}}>Restock cake</button>
    </div>
  );
};

export default Cake;