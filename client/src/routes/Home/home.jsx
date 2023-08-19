import React from 'react'
import nice from "./nice.jpg"

function Home() {
  return (
    <div>
        <h1 style={{color:"cyan"}}> Home </h1>
        <p> This is your personal Anime and Manga saver. </p>
        <p> If you are like me and love just tooooo many <span style={{color:"cyan"}}>manga</span> and <span style={{color:"cyan"}}>anime</span> and want to store your favourites for a future rewatch, you have come to the
        right place. Here You can <span style={{color:"cyan"}}>store as many manga and anime</span> you like.</p>
        <img src={nice} style={{borderRadius:"5px"}} alt='try'/>
        <p style={{fontSize:"11px", textAlign:"center"}}>Art by <a href='https://twitter.com/i/web/status/977362838166515712' target='_blank'>@morikuraen</a></p>
    </div>
  )
}

export default Home;