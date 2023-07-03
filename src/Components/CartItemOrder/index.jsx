import { useContext, useEffect } from "react";
import { RandomStoreContext } from "../../Context";
import { AiOutlineClose } from 'react-icons/ai';
import './CartItemOrder.css';

function CartItemOrder( {element, num, sDelete} ) {

    const {
        numCartShop, setNumCartShop, 
        cartListShop, setCartListShop,
        totalPrice, setTotalPrice
    } = useContext(RandomStoreContext);

    const DeleteOrderHandler = (cartListShop, id) => {
        const copyArray = [...cartListShop]
        const InCart = cartListShop.findIndex((el)=> el[0].id === id);
        setTotalPrice(totalPrice - cartListShop[InCart][0].price);
        copyArray.splice(InCart, 1);
        setCartListShop(copyArray);
        setNumCartShop(numCartShop - 1);
    }

    
    return(
        <div className="cont-CartItemOrder">
            <div>
                <img src={element.images} alt="" />
                <p>{element.title}</p>
            </div>
            <div>
                <span>{num}</span>

                {sDelete && 
                (<AiOutlineClose  
                onClick={() => DeleteOrderHandler(cartListShop, element.id)}
                />)}
                
            </div>
        </div>
    );
} 

export {CartItemOrder};