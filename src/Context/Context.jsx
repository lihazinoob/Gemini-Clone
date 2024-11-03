import { createContext, useState } from "react";
import run from "../config/gemini";

const GlobalContext = createContext();


const GlobalContextProvider = (props) => {

  // Setting some state Variables 

  const [input, setInput] = useState(""); //For taking the input of user



  {/* Ami ekhn ekta function banabo jeita geini.js
    theke run function ke call korbe */}
    const OnSent = async(userPrompt) => 
    {
      await run(input);
    };


    
    const contextValue ={
      input,
      setInput,
      OnSent
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
