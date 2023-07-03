import { useContext } from "react";
import { Link } from "react-router-dom";
import { RandomStoreContext } from "../../Context";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartItemOrder } from "../CartItemOrder";
import './order.css';

function CompOrder( ) {

    const {
        cartShopDS, setCartShopDS,
        cartListShop, setCartListShop,
        setNumCartShop,
        totalPrice, setTotalPrice,
        myOrders, setMyOrders
    } = useContext(RandomStoreContext);

    const COHandler = () => {

        let objD = new Date();

        let obj = {
            items: cartListShop,
            numItems: cartListShop.length,
            cost: totalPrice,
            time: objD.getDate() + '-' + objD.getMonth() + '-' + objD.getFullYear(),
        }

        setMyOrders([...myOrders, obj]);
        setNumCartShop(0);      
        setCartListShop([]);
        setTotalPrice(0);
    }
    
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
                key={element[0].title} element={element[0]} 
                num={element[1]} sDelete={true}
                />;
            })}

            <div>
                <Link to={`/MyOrders/${myOrders.length}`}>
                    <button onClick={() => COHandler()}
                    >Checkout</button>
                </Link>
            </div>
            
        </aside>
    );
}

export {CompOrder};