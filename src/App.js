import { useState, useEffect } from 'react';
import Store from './Component/Store';
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";




function App() {
    const [StoreItem, setStoreItem] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(({ data }) => {
            setStoreItem(data);
        });
    }, []);

    return (
        <>
            <h1>These are all product </h1>
            <Store items={StoreItem} />
        </>
    )
}
export default App;