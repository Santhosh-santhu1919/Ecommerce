import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header(){

    const navigate =useNavigate()
    const cart=useSelector(state => state.product.cart)

    return(
        <div className="myntra_header">
            <div className="header_navigation">
                <div className="header_logo" onClick={()=>navigate('/')}></div>
                <div className="nav">
                    <div className="nav_item nav_item_men" onClick={()=>navigate('/products')}>
                        <span>MEN</span>
                    </div>
                    <div className="nav_item nav_item_women"onClick={()=>navigate('/products')}>
                        <span>WOMEN</span>
                    </div>
                    <div className="nav_item nav_item_kids" onClick={()=>navigate('/products')}>
                        <span>KIDS</span>
                    </div>
                    <div className="nav_item nav_item_home" onClick={()=>navigate('/products')}>
                        <span>HOME</span>
                    </div>
                    <div className="nav_item nav_item_beauty" onClick={()=>navigate('/products')}>
                        <span>BEAUTY</span>
                    </div>
                    <div className="nav_item nav_item_women" onClick={()=>navigate('/products')}>
                        <span>STUDIO</span>
                    </div>
                </div>
            </div>
            <div className="header_nav">
                <div className="header_search">
                    <input 
                    type="text"
                    placeholder="Search for products,"  />
                    <i className="search_icon"></i>
                </div>
                <div className="header_items">
                    <div className="header_item" onClick={()=>navigate('/orders')} >
                        <i className="order_icon"></i>
                        <span>Orders</span>
                    </div>
                    <div className="header_item" onClick={()=>navigate('/wishlist')}>
                        <i className="heart_icon"></i>
                        <span>wishlist</span>
                    </div>
                    <div className="header_item" onClick={()=>navigate('/cart')}>
                        <i className="cart_icon"></i>
                        <span>Bag {cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}