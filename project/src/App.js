import React from "react";
import Profile from "./profile/Profile";

import "./App.css";

function App() {
  const handleName=(e)=>{
   e.preventDefault()
    alert("User Name: Mimi")

  }
  return (
    <div className="App" style={{border:'2px solid',height:'600px',color:'#ed6663'}}>
      <h1 style={{color:'red',fontFamily:'Caveat, cursive'}}> Hello!</h1>
      <Profile 
        fullName="Maroua Maddeh"
        profession=" Electrical Engeneering"
        bio=" I love to travel and have travelled to many parts of Europe in the past two years; I hope to return in the future."
        handleName={handleName}
      >
        <img
          src="./mimi.png"
          alt="my profile"
          style={{ margin: "30px auto", height: "100px" }}
        />
      </Profile>
      
    </div>
  );
}








export default App;
