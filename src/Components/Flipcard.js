import React from 'react'
import './Flipcard.css'
function Flipcard() {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg" alt="Avatar"/>
          </div>
          <div className="flip-card-back">
            <h1>Heading</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium deleniti nemo, fugiat nisi debitis sunt ea cupiditate ut accusamus alias possimus iure harum inventore ipsa ipsum in quam quisquam.</p> 
    
          </div>
        </div>
      </div>
  )
}

export default Flipcard