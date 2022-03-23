import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
            <img src={window.location.origin + "/logo512.png"} alt='default background image'></img>
            <div>
                <p>Our Mission is to make you rich!</p>
            </div>
        </div>
    </div>
  )
}

export default Home