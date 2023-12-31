import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { FaTrophy } from "react-icons/fa"
import {FaRocket } from "react-icons/fa"
import {FaListAlt } from "react-icons/fa"
import {FaCreditCard } from "react-icons/fa"
import {HiOutlineDocumentAdd } from "react-icons/hi"
import {BsFillMegaphoneFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
export default function Navbar() {

 

  return (
    // sidebar
    <div className='sidebar fixed top-0 bottom-0 lg:left-0 w-[250px]  text-center shadow h-screen overflow-y-auto hidden lg:block' id='sidebar'>
      <Link><div className="p-2.5 m-5 pb-10 flex items-center " id='side-border'>
        {/* <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i> */}
        <HiOutlineUserCircle id='circle23' className='bg-blue-600 w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black ' style={{ fontSize: '25px', color: 'white'}}/>
        <h1 className="text-[14px]  ml-3  text-gray-200 ">Login / Register</h1>
      </div></Link>
      {/* <hr className="my-2 text-gray-100 " id='hr1'></hr> */}
      <div >
        <Link to="/"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <FaTrophy style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">Coin Ranking</span>
        </div></Link>

        <Link to="/moonsheet"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <FaRocket style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">Moon Sheet</span>
        </div></Link>

        <Link to="/moonpulse"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <FaListAlt style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">Moon Pulse</span>
        </div></Link>

        <Link to="/scan"><div className="p-2.5 mt-2 m-5 pb-10 flex items-center px-4 duration-300 cursor-pointer  " id='side-border'>
          <FaCreditCard style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">Scan Smart Contract</span>
        </div></Link>

        {/* <hr className="my-4 text-gray-600"> */}
        <Link to="/addcoin"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  ">
          <HiOutlineDocumentAdd style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">Add coin</span>
        </div></Link>

        <Link to="/promote"><div className="p-2.5 mt-2 m-5 flex items-center rounded-md px-4 duration-300 cursor-pointer   " >
          <BsFillMegaphoneFill style={{ fontSize: '25px', color: 'white'}} className='w-[25px] h-[25px] p-1 rounded-md bg-gradient-to-bl from-amber-500 to-black'/>
          <span className="text-[14px] ml-4 text-gray-200">promote coin</span>
        </div></Link>

      </div>

    </div>
  )
}
