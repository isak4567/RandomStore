import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartItemOrder } from "../CartItemOrder";
import './order.css';

function CompOrder( ) {

    const {
        cartShopDS, setCartShopDS,
        cartListShop
    } = useContext(RandomStoreContext);
    
    return(
        <aside 
        className={ `cont-ProductDetail ${cartShopDS? '' : 'ds-none'}`} >
            <div className='title'>
                <p>Your Order</p>
                <AiFillCloseCircle 
                onClick={() => setCartShopDS(false)}
                className="productDetail-close" />
            </div>

            {cartListShop.map((element)=> {
                return <CartItemOrder 
                key={element[0].title} element={element[0]} num={element[1]}
                />;
            })}
            
        </aside>
    );
}

export {CompOrder};