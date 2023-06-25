import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { AiFillCloseCircle } from "react-icons/ai";
import './order.css';

function CompOrder( ) {

    const {
        cartShopDS, setCartShopDS,
        
    } = useContext(RandomStoreContext);
    
    return(
        <aside 
        className={ `cont-ProductDetail ${cartShopDS? '' : 'ds-none'}`} >
            <div className='title'>
                <p>Detail of the product</p>
                <AiFillCloseCircle 
                onClick={() => setCartShopDS(false)}
                className="productDetail-close" />
            </div>


            
        </aside>
    );
}

export {CompOrder};