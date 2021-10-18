import "./App.css";
import styled from "styled-components";
import videos from "./assets/videos/particles.mp4";

const Container = styled.div`
  $desktop: 1200px;
  $laptop: 1024px;
  $tablet: 768px;
  $phone: 480px;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  position: relative;
  .text {
    font-size: clamp(1rem, 4.77vw, 54rem);
    font-weight: 900;
    color: white;
    position: relative;
    margin-top: 50px;
  }
  .text span {
    color: red;
  }
  .text::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 0, 0) 5%,
      rgba(0, 0, 0) 100%
    );
    animation: animate 4.5s linear forwards;
    animation-delay: 2.3s;
  }
  @keyframes animate {
    0% {
      left: 100%;
    }
    100% {
      left: -10%;
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    mix-blend-mode: screen;
    z-index: 1;
  }
  @media screen and (max-width: 1200px) {
    .text::after {
      animation: animate 5s linear forwards;
      animation-delay: 2.3s;
    }
  }
  @media screen and (max-width: 1024px) {
    .text::after {
      animation: animate 5s linear forwards;
      animation-delay: 2.2s;
    }
  }
  @media screen and (max-width: 768px) {
    .text::after {
      animation: animate 5s linear forwards;
      animation-delay: 2.2s;
    }
  }
  @media screen and (max-width: 480px) {
    .text::after {
      animation: animate 5s linear forwards;
      animation-delay: 2.2s;
    }
  }
`;

function App() {
  return (
    <Container>
      <video src={videos} autoPlay muted />
      <h3 className="text">
        <span>P</span>article Di<span>st</span>stortion Effects
      </h3>
    </Container>
  );
}

export default App;
