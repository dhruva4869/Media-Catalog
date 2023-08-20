import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "./animeicon.png"
import { BsFillHouseFill, BsMenuButton } from "react-icons/bs"

function Header() {
  const [vis, setVis] = useState(false);
  const [bvis, setbvis] = useState(true);
  const toggleDropdown = () => {
    setVis(!vis);
    setbvis(false);
  }
  return (
    <header>

        <Link to="/" className='logo'>
            <img src={logo} alt='ReactJS' style={{width:"50px", height: "50px", borderRadius:"50%", backgroundColor:"violet", objectFit:"cover"}} /> AniMan Haven
        </Link>
        <nav style={{display:"flex", overflow:"hidden", textOverflow:"ellipsis"}}>
            <NavLink to="/"><BsFillHouseFill size={19} /></NavLink>
            <p style={{align:"right"}}><button style={{color:"#ff009d", backgroundColor:"inherit", borderWidth:"0px", cursor:"pointer"}} onClick={toggleDropdown}><BsMenuButton size={19} /></button></p>
            {vis && !bvis &&(
              <div style={{padding:"10px"}}>
                <NavLink to="/books">Manga &nbsp;</NavLink>
                <NavLink to="/about"> Anime &nbsp;</NavLink>
                <NavLink to="/movies"> Movie &nbsp;</NavLink>
              </div>
            )}
            
        </nav>

    </header>
  )
}

export default Header