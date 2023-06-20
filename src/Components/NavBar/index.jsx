import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RandomStoreContext } from "../../Context";
import './NavBar.css';

function NavBar() {

    const {numCartShop} = useContext(RandomStoreContext);
    
    return(
        <header>

            <h1>RamdomStore</h1>

            <nav>
                <ul>
                    <li>
                        <NavLink className={`navLink`} 
                        to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={`navLink`} 
                        to={'/MyAccount'}>Account</NavLink>
                    </li>
                    <li>
                        <NavLink className={`navLink`} 
                        to={'/MyOrder'}>Order</NavLink>
                    </li>
                    <li>
                        <NavLink className={`navLink`} 
                        to={'/MyOrders'}>MyOrders</NavLink>
                    </li>
                    <li>
                        <NavLink className={`navLink`} 
                        to={'/SigIn'}>SigIn</NavLink>
                    </li>
                    <li>
                        <AiOutlineShoppingCart className="cart" /> {numCartShop}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export {NavBar};