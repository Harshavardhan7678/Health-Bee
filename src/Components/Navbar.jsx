import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/yoga">Yoga</Link></li>
            <li><Link to="/challenge">Challenge</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    )
}
