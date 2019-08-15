import React from "react";
import "./App.scss";

import Body from "./components/body";
import Header from "./components/Header";

import styled from "styled-components";

const Background= styled.div`
background: #E1E1E1;
`
const Button = styled.button`
  background: ${props => props.primary ? "#282c34" : "white"};
  color: ${props => props.primary ? "white" : "#282c34"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid#282c34 ;
  border-radius: 3px;
`;


function App() {
  return (
    <div className="App">
      <Background>
      <Header/>
      <Body/> 

      

      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <Button>Previous</Button>
    <Button primary>Random</Button>
      </Background>

    </div>

  );
}

export default App;