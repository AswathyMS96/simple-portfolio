
import React ,{useState} from 'react'
import "./Home.css"
import ai from "../assets/capture.png"

const Home = () => {

    // popup box
        const [popup,setPop]=useState(false)
        const handleClickOpen=()=>{
          setPop(!popup)
        }
        const closePopup=()=>{
          setPop(false);
        }

  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        
        <h4> Start staking today </h4><br/>

        <h1>Earn up to 6.8% p.a.*<br/>
        by securing the<br/>
        Cardano network<br/>
        </h1><br/>
        <p>
        Generate passive income by providing<br/>
        a public good to the community.
        </p>

        <div className="gpt3__header-content__btn">
          <button type="button" onClick={handleClickOpen}>Start Staking</button>
          <div>
            {popup? 
            <div className="popup">
                <div className="close-btn">
                <h2 onClick={closePopup}>X</h2>
                </div>
                <div>
                <h2>Select Staking Network</h2><br/>
                <button className="popup-btn"><a href=" " target="_blank">Stake on BNB Chain</a></button><br/>
                <button className="popup-btn"><a href=" ">Stake on Filecoin</a></button><br/>
                <button className="popup-btn">Stake on ETH Chain</button>
                </div>
            </div>:""
            }
          </div>

        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Home;