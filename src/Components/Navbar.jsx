import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
        const [Burger, setBurger] = useState(false);
    const Change = () => {
        setBurger(!Burger);
    }
    const scrolltop = () => {
        setBurger(!Burger);
        window.scrollTo(0,0);
    }
    return(
        <>
            <div onClick={Change} className = {Burger ? "open" : "menu-btn"} >
                <div className="menu-btn_burger"></div>
            </div>
            <div className="fullsecreennav">
           
            <div className = {Burger ? "navbar" : "closed"}>
                <Link onClick={scrolltop} className="navele leftele" to='/'>HOME</Link>
                <Link  onClick={scrolltop} to='/about' data="ABOUT" className="navele rightele">ABOUT</Link> 
                <Link  onClick={scrolltop} to='/calculator' data="CALCULATOR" className="navele leftele">CALCULATOR</Link>
                <Link  onClick={scrolltop} to='/yoga' data="YOGA" className="navele rightele">YOGA</Link>
                <Link  onClick={scrolltop} to='/challenge' data="CHALLENGE" className="navele leftele">CHALLENGE</Link>
                <Link onClick={scrolltop} data='BLOG' className="navele rightele" to='/blog' > BLOG </Link> 
            </div>
            
            </div>
        </>
    )
}
