import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RandomStoreContext } from "../../Context";
import './NavBar.css';

function NavBar() {

    const {
        numCartShop, 
        products,
        setCopyProdructs,
    } = useContext(RandomStoreContext);

    const filtCategory = (e) => {
        let find = e.target.innerHTML;

        let newList = products.filter(obj => (
            obj.category.name.toLowerCase().includes(find.toLowerCase())
            ));

        if (find === "All") {
            setCopyProdructs(products);
        } else {
            setCopyProdructs(newList);
        }
    }
    
    return(
        <header>

            <h1>RamdomStore</h1>

            <nav>
                <ul>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>All</button>
                    </li>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>Electronics</button>
                    </li>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>Clothes</button>
                    </li>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>Shoes</button>
                    </li>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>Furniture</button>
                    </li>
                    <li>
                        <button onClick={(e) => filtCategory(e)} 
                        className={`navLink`}>Others</button>
                    </li>
                </ul>


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