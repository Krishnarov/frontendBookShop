import React from 'react'
import Home from './Home/home'
import {Route, Routes } from 'react-router-dom'
import Course from './course/course';
import Signup from './componetes/signup';
import { Toaster } from 'react-hot-toast';

import { useauth } from './context/Authprovider';
import ContactUs from './Contact/ContactUs';
import AboutUs from './About/AboutUs';
import MyBooks from './MyBook/MyBooks';
import BuyBook from './componetes/BuyBook';

function App() {
  // const [authuser,setauthuser]=useauth();
  // console.log(authuser);
  const user=JSON.parse(localStorage.getItem('User'))
  
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/Contact' element={<ContactUs />}/>
        <Route path='/About' element={<AboutUs />}/>
        <Route path='/MyBooks' element={user && <MyBooks />}/>
        <Route path='/BuyBook/:id' element={user && <BuyBook />}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App;