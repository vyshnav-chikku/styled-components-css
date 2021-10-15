import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  position: absolute;
  height: 65px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  align-items: center;
  padding: 15px 45px;
  background: teal;
  color: #fff;
  .titlecontainer .title {
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
  }
  .titlecontainer .title .IM {
    margin-right: -8px;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .titlecontainer .title .press {
    font-size: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0;
    font-weight: bolder;
    transform: translateY(-1.5px) rotate(-90deg);
    margin: 0;
    /* background: blue; */
  }
  .titlecontainer .title .IVE {
    margin-left: -8px;
    display: flex;
    align-items: center;
  }
  .signupcontainer {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }
  .signup {
    padding: 8px 15px;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    background: transparent;
    border: none;
    outline: none;
  }
  @media screen and (max-width: 434px) {
    padding: 15px 15px;
    .signup {
      padding: 5px 10px;
      font-size: 1rem;
    }
    .titlecontainer .title {
      font-size: 1.9rem;
    }
    .titlecontainer .title .press {
      font-size: 0.38rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div className="titlecontainer">
        <div className="title">
          <div className="IM">IM</div>
          <div className="press">PRESS</div>
          <div className="IVE">IVE</div>
        </div>
      </div>
      <div className="signupcontainer">
        <button className="signup">Sign Up</button>
      </div>
    </Container>
  );
};

export default Navbar;
