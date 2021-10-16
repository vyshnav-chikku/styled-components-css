import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;

  .text:nth-of-type(1) {
    text-transform: uppercase;
    font-size: clamp(2.2rem, 14vw, 15rem);
    color: transparent;
    -webkit-text-stroke: 2px #00bfff;
    position: absolute;
  }
  .text:nth-of-type(2) {
    text-transform: uppercase;
    font-size: clamp(2.2rem, 14vw, 15rem);
    color: #00bfff;
    position: absolute;
    animation: wave 3s linear infinite;
  }
  @keyframes wave {
    0% {
      clip-path: polygon(
        0 35%,
        15% 34%,
        29% 42%,
        43% 51%,
        60% 57%,
        75% 61%,
        86% 60%,
        100% 63%,
        100% 100%,
        0 100%
      );
    }
    50% {
      clip-path: polygon(
        0 56%,
        14% 53%,
        30% 56%,
        45% 54%,
        61% 46%,
        73% 37%,
        86% 31%,
        100% 30%,
        100% 100%,
        0 100%
      );
    }
    100% {
      clip-path: polygon(
        0 35%,
        15% 34%,
        29% 42%,
        43% 51%,
        60% 57%,
        75% 61%,
        86% 60%,
        100% 63%,
        100% 100%,
        0 100%
      );
    }
  }
`;

function App() {
  return (
    <Container>
      <h3 className="text">water wave</h3>
      <h3 className="text">water wave</h3>
    </Container>
  );
}

export default App;
