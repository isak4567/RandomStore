import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { AiOutlineClose } from 'react-icons/ai';
import './CartItemOrder.css';

function CartItemOrder( {element, num} ) {

    const {
        numCartShop, setNumCartShop, 
        cartListShop, setCartListShop,
    } = useContext(RandomStoreContext);

    const DeleteOrderHandler = (cartListShop, id) => {
        const copyArray = [...cartListShop]
        const InCart = cartListShop.findIndex((el)=> el[0].id === id);
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
                <AiOutlineClose  
                onClick={() => DeleteOrderHandler(cartListShop, element.id)}
                />
            </div>
        </div>
    );
} 

export {CartItemOrder};