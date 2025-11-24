import React from "react";
import "./EmptyData.css"
import { MyntraData } from "../../data";
import { useNavigate } from "react-router-dom";

export default function EmptyData(){

    const navigate= useNavigate()
    return(
        <div className="empty_cart">
        <img src={MyntraData.icons.emptyCart} alt="empty cart" />
        <span>Hey, it fells so light</span>
        <p>there is nothing in your bag, let's add some item.</p>
        <button onClick={()=>navigate('/products')}>Add Item</button>
        </div>
    )
}