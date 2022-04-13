import React from 'react';
import Products from './Products';


const Allproduct = () => {
    return (
        <>
            <div className="main_section">
                <h1>All Product </h1>
            </div>
            <div className="menproduct">
                <div className="image__box">
                    <img src="images/banner.jpg" />
                </div>
                
           <div className="body_section">
               <div className="sidenbar_section">
                    <h1>Filter's</h1>
                    <h2>Categories</h2>
                    <ul>
                        <li>Men's Clothing</li>
                        <li>Jewelery</li>
                    </ul>
               </div>
               <div class="all_products">
                   <Products />
               </div>
           </div>
            </div>
        </>
    )
}
export default Allproduct;