import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import './Card.css';

function Card( {tag, img, name, price} ) {

    const {numCartShop, setNumCartShop} = useContext(RandomStoreContext);
    
    return(
        <div className='cont-card' >
            <figure>
                <span>{tag}</span>
                <img src={img} alt="" />
                <div onClick={() => {
                    setNumCartShop(numCartShop+1)
                }}>+</div>
            </figure>
            <p className='card-product-text'>
                <span className='text'>{name}</span>
                <span className='price'>$ {price}</span>
                {/* <span className='price'>$0#%&</span> */}
            </p>

        </div>
    );
}

export {Card};