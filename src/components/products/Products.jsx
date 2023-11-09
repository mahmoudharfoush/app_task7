import React, { useEffect, useState } from 'react'
export default function Products() {

    let[Products, setProducts] = useState([]);

    const getProducts =async ()=>{
        let reponse =await fetch("https://fakestoreapi.com/products");
        let data =await reponse.json();
       setProducts(data);
    }
    useEffect( ()=> {
        getProducts();
    }, [])
    
  return (
    <div className='row'>
    {Products.map( (ele)=>{
        return(
            <div key={ele.id} className='col-md-4'>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-100'/>
            </div>
        )
    })}
    </div>

  )
}
