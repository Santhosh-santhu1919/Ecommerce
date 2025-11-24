import "./Categories.css"
import { MyntraData } from "../../data";
import { useNavigate } from "react-router-dom";

export default function Categories(){
    return(
        <div className="categories">
            <div className="categories_header">
                <span>Shope by category</span>
            </div>
            <div className="categories_content">
                <CategoryRow list={MyntraData.shopCategory.row1}/>
                <CategoryRow list={MyntraData.shopCategory.row2}/>
                <CategoryRow list={MyntraData.shopCategory.row3}/>
            </div>
        </div>
    );
}

const CategoryRow=({list})=>{
    const navigate=useNavigate();
    return(
        <div className="category_row">
            {
                list.map((item,index)=>{
                    return <img 
                    src={item} 
                    alt={item} 
                    key={index} 
                    onClick={()=>navigate('/products')}/>
                })
            }
        </div>
    );
}