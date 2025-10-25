import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <ul className="navbar-menu">
                {/* <li onClick={() => setMenu("Form-Validation")} className={menu === "Form-Validation" ? "active" : ""}><Link to='/'>Form-Validation</Link></li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}><Link to='/todo'>Todo-list</Link></li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}><Link to='/DynamicStyling'>Dynamic-Styling</Link></li> */}
                <Link to='/'>Todo List</Link>
                <Link to='/parentcomponent'> Parent Component</Link>
                <Link to='/randomnumber'> Random Number</Link>
                <Link to='/userlist'> user List</Link>
                <Link to='/productcard'> product card</Link>
                <Link to='/theory'> theory</Link>


            </ul>
        </div >
    )
}

export default Navbar