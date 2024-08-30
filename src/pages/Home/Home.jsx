import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import herotitle from '../../assets/black.jpg'
import netflixbackground from '../../assets/netflixbackground.jpg'
import playbtn from '../../assets/playy.png'
import infobtn from '../../assets/info.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={netflixbackground} alt=""className="bannerimg" />
        <div className="hero-caption">
          <img src={herotitle} alt="" className="captionimg" />
          <p>Discovering his ties to a secret ancient order, young man living in modern Istanbul embarks on quest to save a city from an immortal enemy</p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playbtn} alt="" />Play
            </button>
            <button className="btn dark-btn"><img src={infobtn} alt="" width="800px"height="180px"/>Info</button>
          </div>
          <Titlecards/>
        </div>     
      </div>
      <div className="morecards">
      <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only on netflix"} category={"upcoming"}/>
      <Titlecards title={"Upcoming"} category={"popular"}/>
      <Titlecards title={"Top pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home