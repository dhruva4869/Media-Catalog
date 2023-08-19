import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

function darkMode() {
    const [isDark, setIsDark] = useState(true);
    const toggleDark = () => {
        setIsDark(!isDark);
    }
    
    useEffect(() => {
        const body = document.body;
        body.style.backgroundColor = isDark ? "#121212" : "white";
    })

  return (
    <div>
    <p align="right" style={{cursor:'pointer'}}>
        {!isDark ? <BsFillMoonStarsFill size={20}  onClick={toggleDark} /> : <BsSunFill size={20} onClick={toggleDark} />}
        {/* <button onClick={toggleDark} style={{borderRadius:"10px"}}></button> */}
    </p>
    </div>
  )
}

export default darkMode