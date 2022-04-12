import React,{useState,useEffect} from 'react';


const Allproduct=()=>{
    const [fake,setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])

        const fakestore=async()=>{
        // const response=await fetch("https://fakestoreapi.com/products");
        const jsonData=await response.json();
        setFake(jsonData);
    }
    fakestore();
    return(
        <>
        <div className="main_section">
        <h1>All Product </h1>
        </div>
        <div className="menproduct">
        <div className="image__box">
      <img src="images/banner1.jpg" />
    </div>
        <div className="pro__container">
            {fake.map((values)=>{
                return(
                    <>
                    <div className="pro__content">
                        <div className="img__sec"><img src={values.image} alt ={values.title} /></div>
                        <h5>{values.title}</h5>
                        <p>Price = <span>${values.price}</span></p>
                    </div>
                    </>
                )
            })}
            
        </div>
        </div>
        </>
    )
}
export default Allproduct;