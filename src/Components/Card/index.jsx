import { useContext, useEffect } from "react";
import { RandomStoreContext } from "../../Context";
import './Card.css';

function Card( {elem} ) {

    const {
        numCartShop, setNumCartShop,
        setOrderDS, setItemDetail,
        cartListShop, setCartListShop,
        setCartShopDS
    } = useContext(RandomStoreContext);

    const eventOnclick = (product) => {
        setItemDetail(product);
        setOrderDS(true);
    }

    const AddProductHandler = (event,item) => {
        event.stopPropagation();
        setCartListShop([...cartListShop, item]);
        setNumCartShop(numCartShop+1);
        setCartShopDS(true);
    };
    
    return(
        <div onClick={() => eventOnclick(elem)} 
        className='cont-card' >
            <figure>
                <span>{elem.category.name}</span>
                <img src={elem.images} alt="" />
                <div onClick={(event) => AddProductHandler(event,elem)}>+</div>
            </figure>
            <p className='card-product-text'>
                <span className='text'>{elem.title}</span>
                <span className='price'>$ {elem.price}</span>
                {/* <span className='price'>$0#%&</span> */}
            </p>

        </div>
    );
} 

export {Card};