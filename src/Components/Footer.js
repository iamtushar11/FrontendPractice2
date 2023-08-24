import React from 'react'
import "./Footer.css"
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='footer'>
            <div>

                Made with ❤️ by Tushar
            </div>
            <div>&copy;Copyright {date}</div>
        </div>
    )
}

export default Footer