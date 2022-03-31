import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
            <img src={window.location.origin + "/moneylogo.jpg"} alt='default background image'></img>
            <div>
                <p>Our application is designed to give you, the individual investor a starting point in managing your personal investment decisions. Manage different portfolios. Add stocks and price information to your personal database via an API integration with AlphaVantage. Use these resources for your own research and due diligence.</p>
            </div>
        </div>
    </div>
  )
}

export default Home