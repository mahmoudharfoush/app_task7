import React, { useEffect, useState } from 'react'


export default function Restaurant() {

    let[Restaurant, setRestaurant] = useState([]);

    const getRestaurant =async ()=>{
        let reponse =await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data =await reponse.json();
        setRestaurant(data.recipes);
     
    }
    let[salad, setsalad] = useState([]);

    const getsalad =async ()=>{
        let reponse =await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data =await reponse.json();
        setsalad(data.recipes);
     
    }
    let[onion, setonion] = useState([]);
    const getonion =async ()=>{
        let reponse =await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data =await reponse.json();
        setonion(data.recipes);
     
    }


    useEffect( ()=> {

        getRestaurant();
        getsalad();
        getonion();
        } , [])
   
    
  return (
    <div className='container'>


   
    <div className='row'>
          <h2 className='p-3 mb-5 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>Section Pizza</h2>
    { Restaurant.map( (recipes)=>{
      return (
        <div className='col-md-4' key={recipes.recipe_id}>
        <h3>{recipes.title}</h3>
        <img src={recipes.image_url} className='w-100 h-50'/>
        </div>
      
      )
   
   })}
   <h2 className='p-3 mb-5 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>Section Salad</h2>
    { salad.map( (recipes)=>{
      return (
        <div className='col-md-4' key={recipes.recipe_id}>
        <h3>{recipes.title}</h3>
        <img src={recipes.image_url} className='w-100 h-50'/>
        </div>
      
      )
   
   })}
   <h2 className='p-3 mb-5 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>Section Onion</h2>
    { onion.map( (recipes)=>{
      return (
        <div className='col-md-4' key={recipes.recipe_id}>
        <h3>{recipes.title}</h3>
        <img src={recipes.image_url} className='w-100 h-50'/>
        </div>
      
      )
   
   })}
    </div>

    </div>

  )
}
