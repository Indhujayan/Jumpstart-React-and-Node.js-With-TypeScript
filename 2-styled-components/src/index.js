import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

const Header = styled.h1`
  color: red;
  font-size: 48px;
  @media (max-width: 480px) {
    color: green;
    font-size: 24px;
  }
`;
const Hero = styled(Header)`
  color: blue;
  font-size: 100px;
`;
const App = () => {
  return (
    <div>
      <Hero>I am a Hero</Hero>
      <Header>Hello React!</Header>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
