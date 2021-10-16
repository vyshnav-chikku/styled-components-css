import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: black;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  .p {
    font-size: 10rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    text-shadow: 0.24rem 0 0 rgba(255, 0, 0), 0.24rem 0.24rem 0 rgba(0, 0, 255),
      -0.24rem -0.24rem 0 rgba(0, 255, 0);

    animation: glitch 1s infinite;
    position: relative;
  }
  .p span {
    position: absolute;
    top: 0;
    left: 0;
  }
  .p span:nth-of-type(1) {
    animation: glitch 1.5s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.24rem, -0.24rem);
    opacity: 0.8;
  }
  .p span:nth-of-type(2) {
    animation: glitch 0.5s infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.24rem, 0.24rem);
    opacity: 0.8;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.24rem 0 0 rgba(255, 0, 0),
        0.24rem 0.24rem 0 rgba(0, 0, 255), -0.24rem -0.24rem 0 rgba(0, 255, 0);
    }
    14% {
      text-shadow: 0.24rem 0 0 rgba(255, 0, 0),
        0.24rem 0.24rem 0 rgba(0, 0, 255), -0.24rem -0.24rem 0 rgba(0, 255, 0);
    }
    15% {
      text-shadow: 0.24rem 0 0 rgba(0, 255, 0),
        0.24rem 0.24rem 0 rgba(255, 0, 0), -0.24rem -0.24rem 0 rgba(0, 0, 255);
    }
    49% {
      text-shadow: 0.24rem 0 0 rgba(0, 255, 0),
        0.24rem 0.24rem 0 rgba(255, 0, 0), -0.24rem -0.24rem 0 rgba(0, 0, 255);
    }
    50% {
      text-shadow: 0.24rem 0 0 rgba(255, 0, 0),
        0.24rem 0.24rem 0 rgba(0, 0, 255), -0.24rem -0.24rem 0 rgba(0, 255, 0);
    }
    99% {
      text-shadow: 0.24rem 0 0 rgba(255, 0, 0),
        0.24rem 0.24rem 0 rgba(0, 0, 255), -0.24rem -0.24rem 0 rgba(0, 255, 0);
    }
    100% {
      text-shadow: 0.24rem 0 0 rgba(0, 255, 0),
        0.24rem 0.24rem 0 rgba(255, 0, 0), -0.24rem -0.24rem 0 rgba(0, 0, 255);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="p">
        <span>glitch text</span>glitch text<span>glitch text</span>
      </div>
    </Container>
  );
}

export default App;
