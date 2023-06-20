import { useContext } from "react";
import { RandomStoreContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import './Home.css';


function Home() {

    const {products} = useContext(RandomStoreContext);

    return(
        <Layout>
            
            Algo
            <div className="cont-products-home">
                { products?.map((elem)=> {
                    return <Card key={elem.id} 
                    tag={elem.category.name} 
                    name={elem.title} img={elem.images[0]}
                    price={elem.price}
                    />
                })}
            </div>
        </Layout>
    );
}

export { Home };