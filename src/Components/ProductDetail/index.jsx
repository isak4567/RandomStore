import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { AiFillCloseCircle } from "react-icons/ai";
import './ProductDetail.css';

function ProductDetail( ) {

    const {
        orderDS, setOrderDS,
        itemDetail
    } = useContext(RandomStoreContext);
    
    return(
        <aside 
        className={ `cont-ProductDetail ${orderDS? '' : 'ds-none'}`} >
            <div className='title'>
                <p>MyOrder</p>
                <AiFillCloseCircle 
                onClick={() => setOrderDS(false)}
                className="productDetail-close" />
            </div>

            <div className="itemDetail-DS">

                <figure>
                    <img src={itemDetail?.images} alt="" />
                </figure>
                <p className='card-product-text'>
                    <span className='price'>$ {itemDetail?.price}</span>
                    <span className='text'>{itemDetail?.title}</span>
                    {/* <span className='price'>$0#%&</span> */}
                </p>
                <p className='card-product-text'>{itemDetail?.description}</p>


            </div>


            
        </aside>
    );
}

export {ProductDetail};