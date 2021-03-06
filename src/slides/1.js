import React, { useState } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import {Button as CustomButton, Input} from 'antd'

const code = `
const UseState = () => {
  const [text, setText] = useState(' testando 123')
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <Container>
      <Header>O que é?</Header>
      <ButtonWrapper>
        <Button onClick={()=> setIsVisible(!isVisible)}>
          {isVisible ? 'Esconder' : 'Aparecer'}
        </Button>
      </ButtonWrapper>
      <Input 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
      <Text align="center" isVisible={isVisible}>
        {text}
      </Text>
    </Container>
  )
}

render(
  <UseState/>
);`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const Text = styled.h2`
  ${({isVisible}) => !isVisible && 'display: none;'}
  font-size: 2.5rem;
  color: #448AFF;
  margin: 30px;
  text-align: ${props => props.align};

  &:hover {
    color: #2962FF;
  }
`;

const ButtonWrapper = styled.div`
  margin: 10px auto ;
  width: 60px;
  height: 60px;
`

const Button = styled(CustomButton)`
  background-color: #282a36;
  color: white;
`

const Slide1 = () => {
  return (
    <div className="slide slide-row slide-1">
      <LiveProvider code={code} scope={{ styled, useState, Container, Header, Input, Text, Button, ButtonWrapper }} noInline>
        <LivePreview className="code-preview" />
        <div className="code-editor-container">
          <LiveEditor className="code-editor" />
          <LiveError className="code-editor" />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide1;
