import { useContext } from "react";
import { Link } from "react-router-dom";
import { RandomStoreContext } from "../../Context";
import { Layout, CompOrders } from "../../Components";


function MyOrders() {

    const {myOrders} = useContext(RandomStoreContext);
    
    return(
        <Layout>
            Algo que ver en ordenes
            {myOrders?.map((elem, index) => {
                return (
                    <Link key={`link-${index}`} className="item-order" to={`/MyOrders/${index}`}>
                        < CompOrders 
                        key={`comp-${elem.numItems+elem.cost}`} 
                        comp={elem}/>
                    </Link>
                    );
            })}
        </Layout>
    );
}

export {MyOrders};