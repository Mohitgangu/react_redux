import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../utils/redux/store"
import {BUY_ICECREAM,RESTOCK_ICECREAME} from "../utils/redux/IceCream"

const IceCream = () => {

    const[q,setQ]=useState(0)
    const dispatch=useDispatch()
    const {numOfIce}=useSelector((store)=>{
        return store.iceCream
    })
  return (
    <div>
      <h2>Num of IceCreame:{numOfIce}</h2>
      <input onChange={(e)=>{setQ(e.target.value)}} type="text" />
      <button onClick={()=>{dispatch(BUY_ICECREAM(q))}}>Buy Ice Creame</button>
      <button onClick={()=>{dispatch(RESTOCK_ICECREAME())}} >Restock IceCreame</button>
    </div>
  );
};

export default IceCream;