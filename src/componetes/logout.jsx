import React from 'react'
import { useauth } from '../context/Authprovider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
const [authuser ,setauthuser]=useauth();
const navgate=useNavigate()
const heandllogout=()=>{

    setauthuser({
        ...authuser,
        user:null,
    })
    localStorage.removeItem('User');
    toast.success('logout');
    navgate('/')
    setTimeout(()=>{

        window.location.reload();
    },1000)

}

  return (
    <div>
      <button className='bg-red-600 text-white px-3 py-2 rounded-md' onClick={heandllogout}>Logout</button>
    </div>
  )
}

export default Logout;
