import React, { useState, useMemo } from "react";
import "./Products.css"
import Filters from "../../Pages/Filters";
import ProductCard from "../../Components/ProductCard";
import { useSelector } from "react-redux";


export default function Products(){

        const products = useSelector((state) => state.product.products);
        
        const [price,setPrice]=useState('')
        const [search,setSearch] = useState('')
        
        const filteredProducts=useMemo(()=>{
            if(search !== '' || price !==''){
                let output=products.filter((item)=>{
                    let name = false
                    let brand= false

                    name=item.name.toLowerCase().includes(search.toLowerCase())
                    brand=item.brand.toLowerCase().includes(search.toLowerCase())
                    return name||brand

                })

                if (price === 'highlow') {
                    output = output.sort((a,b)=>b.price -a.price)
                }
                else{
                    output = output.sort((a,b)=>a.price -b.price)
                }

                return output
            }
            else{
                return products
            }
        },[search,price,products])
    return(
        <div className="products">
            <div className="breadcrumb">
                <p>Home / Clothing / <b>Products</b></p>
            </div>
            <div className="products_container">
                <Filters 
                search={search}
                setSearch={setSearch}
                price={price}
                setPrice={setPrice}
                />
                <div className="products_content">
                    {filteredProducts.map((item,index)=>{
                        return <ProductCard data={item} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}