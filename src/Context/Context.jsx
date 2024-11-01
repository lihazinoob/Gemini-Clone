import { createContext } from "react";
import run from "../config/gemini";
const GlobalContext = createContext();
const GlobalContextProvider = (props) => {

  {/* Ami ekhn ekta function banabo jeita geini.js
    theke run function ke call korbe */}
    const OnSent = async(userPrompt) => 
    {
      await run(userPrompt);
    };

    OnSent("Hello");
    const contextValue ={}


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
