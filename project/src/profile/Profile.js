import React from "react";
import PropTypes from "prop-types";
const Profile = ({ children,fullName, profession, bio, handleName }) => {
  return (
    <div>
      {children}
      <br />
      <p style={{ color: "#fe91ca", fontFamily: "Srisakdi,cursive" }}> 
        Name: {fullName}
      </p>
      <br />
      <p style={{ color: "#ff847c", fontFamily: "Dancing Script, cursive" }}>
        Profession: {profession}
      </p>
      <br />
      <p  style={{color:'black',fontFamily:'Caveat, cursive'}}> {bio}</p>
      <br />
      <button onClick={handleName} style={{ margin: "20px",borderRadius:'50%',padding:'15px',backgroundColor:'#4CAF50',color:'#fff'}}>
        Click me
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Omar",
  profession: "devoloper",
  bio: " swimming",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func.isRequired,
};
export default Profile;
