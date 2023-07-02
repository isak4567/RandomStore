import { useContext, useEffect } from "react";
import { RandomStoreContext } from "../../Context";
import './Card.css';


function Add(data, elem, id, AddProductHandler) {
    let isItem = data.filter((el) =>  (el[0].id === id )).length;

    if (isItem > 0) {
        return <div >uuu</div>
    } else {
        return <div onClick={(event) => AddProductHandler(event, elem)}>+</div>
    }
}

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

    const AddProductHandler = (event, item) => {
        event.stopPropagation();

        const repInCart = cartListShop.findIndex((el)=> el[0] === item);
        const copyArray = [...cartListShop, [item, 1]]

        if (repInCart > -1) {
            copyArray[repInCart][1] += 1;
        } else setCartListShop(copyArray);
        
        setNumCartShop(numCartShop+1);
        setCartShopDS(true);
    };
    
    return(
        <div onClick={() => eventOnclick(elem)} 
        className='cont-card' >
            <figure>
                <span>{elem.category.name}</span>
                <img src={elem.images} alt="" />
                {Add(cartListShop, elem, elem.id, AddProductHandler )}
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