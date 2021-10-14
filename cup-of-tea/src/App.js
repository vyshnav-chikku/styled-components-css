import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  height: 100vh;
  background: #98afc7;
  position: relative;
  .cup {
    width: min(340px, 95%);
    height: min(340px, 95%);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto 20vh auto;
    background: linear-gradient(to left, #ccccff, #fff);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }
  .top {
    height: 60px;
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    background: linear-gradient(to left, #ccccff, #fff);
    border-radius: 50%;
  }
  .circle {
    width: calc(100% - 20px);
    height: 60px;
    top: 5px;
    position: absolute;
    background: coral;
    left: 0;
    right: 0;
    margin: auto;
    background: linear-gradient(to right, #ccccff, #fff);
    border-radius: 50%;
    overflow: hidden;
  }
  .tea {
    top: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    background: coral;
    left: 0;
    right: 0;
    background: linear-gradient(coral, #c04000);
    border-radius: 50%;
  }
  .handle {
    position: absolute;
    right: -80px;
    top: 20px;
    width: 170px;
    height: 220px;
    border: 25px solid #ccccff;
    border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-radius: 50%;
    transform: rotate(35deg);
    margin: auto;
  }
  .plate {
    position: absolute;
    width: 650px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(to left, #ccccff, #fff);
    box-shadow: 0px 36px 31pxrgba (0, 0, 0, 0.21);
    -webkit-box-shadow: 0px 36px 31px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 36px 31px rgba(0, 0, 0, 0.21);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto auto 13vh auto;
  }
  .plate::after {
    content: "";
    position: absolute;
    /* no need of width and height */
    top: 30px;
    left: 30px;
    bottom: 30px;
    right: 30px;
    background: radial-gradient(
      rgba(0, 0, 0, 0.2) 25%,
      transparent,
      transparent
    );
  }
  .plate::before {
    content: "";
    position: absolute;
    /* no need of width and height */
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: linear-gradient(to right, #ccccff, #fff);
    border-radius: 50%;
  }
  .vapour {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: -130px;
    left: 30px;
    right: 30px;
    bottom: 0;
    z-index: 1;
  }
  @media screen and (max-width: 654px) {
    .cup {
      width: min(240px, 95%);
      height: min(240px, 95%);
    }
    .top {
      top: -20px;
      height: 40px;
    }
    .circle {
      width: calc(100% - 10px);
      height: 40px;
      top: 2px;
    }
    .tea {
      top: 10px;
    }
    .handle {
      width: 100px;
      height: 120px;
      right: -40px;
    }
    .plate {
      position: absolute;
      width: 450px;
      height: 150px;
      margin: auto auto 14vh auto;
    }
    .vapour {
      top: -50px;
      left: 30px;
      right: 30px;
      bottom: 0;
      z-index: 1;
    }
  }
  @media screen and (max-width: 454px) {
    .cup {
      width: min(200px, 95%);
      height: min(200px, 95%);
    }
    .top {
      top: -15px;
      height: 30px;
    }
    .circle {
      width: calc(100% - 10px);
      height: 30px;
      top: 2px;
    }
    .tea {
      top: 8px;
    }
    .plate {
      width: 350px;
      height: 150px;
      margin: auto auto 14vh auto;
    }
  }
  @media screen and (max-width: 354px) {
    .cup {
      width: min(150px, 95%);
      height: min(150px, 95%);
    }
    .handle {
      width: 80px;
      height: 100px;
      right: -30px;
    }
    .plate {
      width: 300px;
      height: 120px;
      margin: auto auto 16vh auto;
    }
  }
  @media screen and (max-width: 319px) {
    .plate {
      width: 280px;
      height: 100px;
      margin: auto auto 16vh auto;
    }
  }
`;
const Span = styled.span`
  height: 130px;
  width: 8px;
  background: white;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  filter: blur(8px);
  animation-delay: calc(${(props) => props.i} * -0.5s);
  @keyframes animate {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      transform: translateY(-200px) scaleX(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-400px) scaleX(10);
      opacity: 1;
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="plate"></div>
      <div className="cup">
        <div className="top">
          <div className="vapour">
            <Span i={1}></Span>
            <Span i={19}></Span>
            <Span i={3}></Span>
            <Span i={17}></Span>
            <Span i={2}></Span>
            <Span i={18}></Span>
            <Span i={5}></Span>
            <Span i={20}></Span>
            <Span i={4}></Span>
            <Span i={15}></Span>
            <Span i={7}></Span>
            <Span i={16}></Span>
            <Span i={6}></Span>
            <Span i={13}></Span>
            <Span i={9}></Span>
            <Span i={14}></Span>
            <Span i={10}></Span>
            <Span i={12}></Span>
            <Span i={8}></Span>
            <Span i={11}></Span>
          </div>
          <div className="circle">
            <div className="tea"></div>
          </div>
        </div>
        <div className="handle"></div>
      </div>
    </Container>
  );
}

export default App;
