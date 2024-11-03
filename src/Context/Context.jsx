import { createContext, useState } from "react";
import run from "../config/gemini";

const GlobalContext = createContext();


const GlobalContextProvider = (props) => {

  // Setting some state Variables 

  const [input, setInput] = useState(""); //For taking the input of user
  const [resultData, setResultData] = useState(""); //For storing the result of the API
  const [loading, setLoading] = useState(false); //For showing the loading screen
  const [showResult, setShowResult] = useState(false); //For showing the result screen
  const [recentPrompt,setRecentPrompt] = useState(""); //For storing the recent prompt
  
  {/* Ami ekhn ekta function banabo jeita geini.js
    theke run function ke call korbe */}
    const OnSent = async(userPrompt) => 
    {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      const result = await run(input);
      setResultData(result);
      setLoading(false);
      setInput("");

    };


    
    const contextValue ={
      input,
      setInput,
      OnSent,
      showResult,
      recentPrompt,
      setRecentPrompt,
      resultData,
      setResultData
    }


  return (
    <>
      
      {/* Providing the Context Provider */}
      <GlobalContext.Provider value={contextValue}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalContextProvider;
export {GlobalContext};
