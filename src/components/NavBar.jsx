import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

const NavBar = () => {

    let user=JSON.parse(localStorage.getItem('user'))
    console.log(user);
    const navigate=useNavigate()

    const logout=()=>
    {
        localStorage.clear('user')
        navigate('/login')
    }

  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">E-NoteBook</div>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    {user && <li className="cursor-pointer" onClick={logout}>Logout</li>}
                </ul>
            </div>
        </div>
  );
};

export default NavBar;