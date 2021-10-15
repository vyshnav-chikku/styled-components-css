import styled from "styled-components";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Body />
    </Container>
  );
}

export default App;
