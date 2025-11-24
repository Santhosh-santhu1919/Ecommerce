import { useSelector } from 'react-redux'
import HProductCard from '../../Components/HProductCard'
import './wishlist.css'
import EmptyData from '../../Components/EmptyData'

export default function WishList() {

    const products = useSelector(state => state.product.products)

    if (products.filter(item => item.wishList).length === 0) {
        return <EmptyData />
    }


    return (
        <div className="wishlist_container">
            <div className="wishlist_header">
                <span>Wishlist</span>
            </div>
            <div className="wishlist_content">
                <span>total items : 1</span>
                {
                    products.filter(item => item.wishList).map((item, index) => {
                        return <HProductCard
                            type={'wishlist'}
                            data={item} 
                            key={index}
                            />
                    })
                }
            </div>
        </div>
    )

}