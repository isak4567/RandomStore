import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { Card, Layout, ProductDetail, CompOrder } from "../../Components";

import './Home.css';


function Home() {

    const {products} = useContext(RandomStoreContext);

    return(
        <Layout>
            
            Algo
            <div className="cont-products-home">
                { products?.map((elem)=> {
                    return <Card key={elem.id} elem={elem}/>
                })}
            </div>
            <ProductDetail />
            <CompOrder />
        </Layout>
    );
}

export { Home };