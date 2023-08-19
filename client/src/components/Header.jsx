import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "./animeicon.png"
import { BsFillHouseFill } from "react-icons/bs"

function Header() {
  return (
    <header>

        <Link to="/" className='logo'>
            <img src={logo} alt='ReactJS' style={{width:"50px", height: "50px", borderRadius:"50%", backgroundColor:"violet", objectFit:"cover"}} /> AniMan Haven
        </Link>

        <nav style={{display:"flex", overflow:"hidden", textOverflow:"ellipsis"}}>
            <NavLink to="/"><BsFillHouseFill size={19} /></NavLink>
            <NavLink to="/books">Manga</NavLink>
            <NavLink to="/about">Anime</NavLink>
        </nav>

    </header>
  )
}

export default Header