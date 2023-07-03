
import './orders.css';

function CompOrders( {comp} ) {


    
    return(
        <div className='cont-Sell'>
            <div className='cont-Sell-info'>
                <p>Compro {comp.numItems} productos en total</p>
                <p>Compra realizada el <span>{comp.time}</span></p>
            </div>
            <div className='cont-Sell-cost'>
                <p>Total de <span>${comp.cost}</span></p>
            </div>
        </div>
    );
}

export {CompOrders};