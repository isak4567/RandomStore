import { useContext, useState } from "react";
import { RandomStoreContext } from "../../Context";
import { Card, Layout, ProductDetail, CompOrder } from "../../Components";
import './Home.css';


function Home() {

    const {
        products, copyProdructs, setCopyProdructs
    } = useContext(RandomStoreContext);

    const [searchValue, setSearchValue] = useState('');

    const SearchHandler = (e) => {
        let find = e.target.value;
        setSearchValue(find);

        let newList = products.filter(obj => obj.title.toLowerCase().includes(find.toLowerCase()));
        setCopyProdructs(newList);
    };

    return(
        <Layout>
            <div>
                AHHHHHHHHHHHHHHHHHHHHHHHHH
            </div>
            <input 
             onChange={(e) => SearchHandler(e)}
             value={searchValue}
             type="text" />
            <div className="cont-products-home">
                {copyProdructs?.map((elem)=> {
                    return <Card key={elem.id} elem={elem}/>
                })}
            </div>
            <ProductDetail />
            <CompOrder />
        </Layout>
    );
}

export { Home };