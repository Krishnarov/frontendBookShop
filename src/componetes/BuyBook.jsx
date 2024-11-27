import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navebar from "./navebar";
import Footer from "./footer";
import lodar from "../images/lode.gif"

function BuyBook() {
  const location = useLocation();
  const { items } = location.state || {};
const [loging ,setloding]=useState(false)
const navegater=useNavigate()
  const handalebuy=()=>{
    setloding(true)
    localStorage.setItem('books',JSON.stringify(items))
   setTimeout(() => {
    setloding(false)
    navegater('/MyBooks')
   }, 3000);
  }
  return (
    <div className="h-screen">
      <Navebar />
      <div className="w-full flex items-center justify-center my-10">
        <div className="flex md:w-2/4 items-center rounded-lg bordered shadow-md md:py-8 px-4 md:px-8 mt-20 relative">
          <div className="w-2/4 ">
            <img src={items.image} alt="" />
          </div>
          <div className="w-2/4 px-4 ">
            <div className="font-bold mb-2 text-xl">{items.name}</div>
            <div className=" my-2"><span className="text-slate-500">Category : </span>{items.category}</div>
            <div className="text-sm my-2"><span className="text-slate-500">Author : </span> {items.author}</div>
            <div className="text-sm my-2">{items.title}</div>

            <div className=" absolute md:right-10 md:top-10 right-52 top-6 px-2 border text-white bg-pink-500 rounded-2xl">{items.type}₹</div>

            <div className="text-xl my-2 ">   {items.price===0? null:(<div><span className="text-slate-700">Price :</span><span className="strick text-lg text-slate-500 font-semibold mx-2"><s>{items.price*2}₹</s></span>  {items.price}₹ <span className="text-green-800 text-lg ml-2">50% </span><span className="text-green-500">Off </span>  </div>)} </div>
          <div className="text-white bg-pink-500 font-bold py-2 text-center rounded-lg mt-5" onClick={()=>handalebuy()}>{loging? <div className="flex justify-center"><img src={lodar} className="h-6" /></div>:<div>Buy Now</div>}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuyBook;
