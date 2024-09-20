import React from 'react'
import { FaFastForward } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { useState } from 'react';

const Button = () => {
  return (
    <div className=' m-auto text-center '>
       <div className=' mt-20 flex'>
                <div className=' p-4 m-auto text-white text-3xl '><FaFastForward /></div>
                <div className=' p-4 m-auto text-white text-3xl'>< FaMap/></div>
                <div className=' p-4 m-auto text-white text-3xl'><BsCoin /></div>
                <div className=' p-4 m-auto text-white text-3xl'><FaUserFriends /></div>
        </div>
    </div>
  )
}

export default Button