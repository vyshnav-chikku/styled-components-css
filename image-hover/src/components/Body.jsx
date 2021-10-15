import React from "react";
import styled from "styled-components";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";

const Container = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  .titleandimage {
    margin: auto;
    height: min(600px, 100%);
    width: min(1400px, 85%);
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  .titlecontainer .title {
    font-size: 4rem;
    font-weight: bolder;
    margin-bottom: 40px;
  }
  .para {
    margin-bottom: 40px;
  }
  .download {
    padding: 16px 26px;
    font-size: 1rem;
    background: teal;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .imagecontainer {
    width: min(360px, 90%);
    height: 360px;
    margin: 10px auto;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
  }
  .imagecontainer:hover .image:nth-of-type(1) {
    transform: translate(-100px, -200px) rotate(360deg);
    transition: all 0.5s ease;
  }
  .imagecontainer:hover .image:nth-of-type(2) {
    transform: translate(-60px, -100px) rotate(360deg);
    transition: all 0.5s ease;
  }
  .imagecontainer:hover .image:nth-of-type(3) {
    transform: translate(200px, -100px) rotate(360deg);
    transition: all 0.5s ease;
  }
  .imagecontainer:hover .image:nth-of-type(6) {
    transform: translate(100px, -60px) rotate(360deg);
    transition: all 0.5s ease;
  }
  .imagecontainer:hover .image:nth-of-type(9) {
    transform: translate(100px, 200px) rotate(360deg);
    transition: all 0.5s ease;
  }
  .imagecontainer:hover .image:nth-of-type(8) {
    transition: all 0.5s ease;
    transform: translate(60px, 100px) rotate(360deg);
  }
  .imagecontainer:hover .image:nth-of-type(4) {
    transition: all 0.5s ease;
    transform: translate(-200px, 100px) rotate(360deg);
  }
  .imagecontainer:hover .image:nth-of-type(7) {
    transition: all 0.5s ease;
    transform: translate(-100px, 150px) rotate(360deg);
  }
  .imagecontainer:hover .image:nth-of-type(5) {
    transition: all 0.5s ease;
    transform: translate(-50px, 50px) rotate(360deg);
  }

  .image {
    width: 120px;
    height: 120px;
    /* flex-basis: 120px; */
    position: relative;
    transition: all 0.5s ease;
    z-index: 101;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image::after {
    width: 120px;
    height: 30px;
    left: 7px;
    bottom: -29px;
    transform: skewX(29deg);
    content: "";
    position: absolute;
    background: #033e3e;
  }
  .image::before {
    width: 17px;
    height: 120px;
    top: 14px;
    right: -16px;
    transform: skewY(61deg);
    content: "";
    position: absolute;
    background: #307d7e;
  }
  @media screen and (max-width: 680px) {
    .titlecontainer .title {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    .para {
      margin-bottom: 10px;
    }
    .download {
      padding: 10px 16px;
      font-size: 1rem;
    }
    .imagecontainer {
      width: min(300px, 90%);
      height: 300px;
    }
    .image {
      width: 100px;
      height: 100px;
    }
    .image::after {
      width: 100px;
      height: 30px;
      left: 7px;
      bottom: -29px;
      transform: skewX(29deg);
    }
    .image::before {
      width: 17px;
      height: 100px;
      top: 14px;
      right: -16px;
      transform: skewY(61deg);
    }
    @media screen and (max-width: 434px) {
        
      .imagecontainer {
        width: min(180px, 90%);
        height: 180px;
      }
      .image {
        width: 60px;
        height: 60px;
      }
      .image::after {
        width: 60px;
        height: 30px;
        left: 7px;
        bottom: -29px;
        transform: skewX(29deg);
      }
      .image::before {
        width: 17px;
        height: 60px;
        top: 14px;
        right: -16px;
        transform: skewY(61deg);
      }
    }
  }
`;

const Body = () => {
  return (
    <Container>
      <div className="titleandimage">
        <div className="titlecontainer">
          <div className="title">
            Move Cursor On <br /> Image & See Effect
          </div>
          <div className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, enim.{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis!
          </div>
          <button className="download">DOWNLOAD</button>
        </div>
        <div className="imagecontainer">
          <div className="image " y={-200}>
            <img src={image1} alt="" />
          </div>
          <div className="image" x={-200}>
            <img src={image2} alt="" />
          </div>
          <div className="image" x={200}>
            <img src={image3} alt="" />
          </div>
          <div className="image" x={200}>
            <img src={image4} alt="" />
          </div>
          <div className="image" y={-200}>
            <img src={image5} alt="" />
          </div>
          <div className="image" x={-200}>
            <img src={image6} alt="" />
          </div>
          <div className="image" x={200}>
            <img src={image7} alt="" />
          </div>
          <div className="image" x={-200}>
            <img src={image8} alt="" />
          </div>
          <div className="image" y={-200}>
            <img src={image9} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Body;
