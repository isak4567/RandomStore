import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import './Card.css';

function Card( {elem} ) {

    const {
        numCartShop, setNumCartShop,
        setOrderDS, setItemDetail
    } = useContext(RandomStoreContext);

    const eventOnclick = (product) => {
        setItemDetail(product);
        setOrderDS(true);
    }
    
    return(
        <div onClick={() => eventOnclick(elem)} 
        className='cont-card' >
            <figure>
                <span>{elem.category.name}</span>
                <img src={elem.images[0]} alt="" />
                <div onClick={() => {
                    setNumCartShop(numCartShop+1)
                }}>+</div>
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