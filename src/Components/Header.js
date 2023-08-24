import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import "./Header.css"
const Header = () => {
    return (

        <div className='header'>
            <div className='heading'>
                How can we help?
            </div>
            <div className='input-conatiner'>
                <input placeholder='Search' className='input' />
                <AiOutlineRight className='icons' />
            </div>
        </div>
        // </div>
    )
}

export default Header