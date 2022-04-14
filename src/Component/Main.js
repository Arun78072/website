import { useState, useEffect } from 'react';
import Store from './Store';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
function Main() {
    const [StoreItem, setStoreItem] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(({ data }) => {
            setStoreItem(data);
        });
    }, []);
    return (
        <>
        <Header />
            <h1 className="centerh1">These are all product </h1>
            <Store items={StoreItem} />
        <Footer />
        </>
    )
}
export default Main;