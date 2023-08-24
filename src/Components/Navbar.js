import React from 'react'
import { BiCctv } from "react-icons/bi";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='modal'>
            <nav>
                <ul>
                    <li className='li1'> <BiCctv /> Abstract</li>
                    <div className='line'></div>
                    <li className='li2'>Help Center</li>
                </ul>
                <div className='buttons'>
                    <button className='btn1'>Submit a request</button>
                    <button className='btn2'>Sign in</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar