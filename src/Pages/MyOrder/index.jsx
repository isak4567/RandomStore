import { useContext  } from "react";
import { RandomStoreContext } from "../../Context";
import { Layout, CartItemOrder } from "../../Components";


function MyOrder() {
    const currentPath = 
    window.location.pathname[window.location.pathname.length - 1];

    const {
        myOrders
    } = useContext(RandomStoreContext);

    
    return(
        <Layout>

            <div>
                <p>Date:  </p>
                <p>{myOrders[currentPath]?.time}</p>
            </div>

            <div>
                {myOrders[currentPath]?.items.map((element)=> {
                return <CartItemOrder 
                key={element[0].title} element={element[0]} 
                num={element[1]} sDelete={false}
                />;
                })}
            </div>

            <div>
                <p>Price: </p>
                <p> {myOrders[currentPath]?.cost} </p>
            </div>


        </Layout>
    );
}

export {MyOrder};