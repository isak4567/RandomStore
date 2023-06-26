import './CartItemOrder.css';

function CartItemOrder( {element, num} ) {

    
    return(
        <div className="cont-CartItemOrder">
            <div>
                <img src={element.images} alt="" />
                <p>{element.title}</p>
            </div>
            <span>{num}</span>
        </div>
    );
} 

export {CartItemOrder};