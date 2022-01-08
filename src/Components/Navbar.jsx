import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/Yoga">Yoga</Link></li>
            <li><Link to="/Challenge">Challenge</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul>
    )
}
