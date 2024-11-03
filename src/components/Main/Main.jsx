import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { GlobalContext } from "../../Context/Context";
const Main = () => {
  // Importing the context from Context.js in here

  const { input, setInput, OnSent, showResult,recentPrompt,setRecentPrompt , resultData , setResultData} = useContext(GlobalContext);

  // Function to change the state of this component when there is some change in the input field

  const changeInput = (event) => {
    // setInput(event.target.value);

    setInput(event.target.value);
    // console.log(input);
  };

  const clickSend = () => {
    OnSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,DEV</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see an upcoming road</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Brainstorm Team Bonding activities for our work:</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>Improve the readibility of the following code: </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-data">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              <p>{resultData}</p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              value={input}
              onChange={changeInput}
              type="text"
              placeholder="Enter a Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={clickSend} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, please cross check.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
