import React from "react";
import styled from 'styled-components';
import axios from 'axios';

// Photos
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
import seven from './img/7.jpg';
import eight from './img/8.jpg';
import nine from './img/9.jpg';
import ten from './img/10.jpg';

// Styling
const StyledContainer = styled.div`
    width: 300px;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #997300;
    color: white;
    margin: 3rem;
    box-shadow: 0 0 5px black;
`;

const StyledImg = styled.img`
  width: 100%;
  box-shadow: 0 0 5px black;
`;

const StyledH2 = styled.h2`
  text-shadow: 2px 2px black;
`;

const StyledH4 = styled.h4`
  text-shadow: 2px 2px black;
`;

//================ Card ================
const Card = (props) => {

  // section could be cleaner by moving the imports into an array
  let source;

  switch (props.index) {
    case 0:
      source = one;
      break;
    case 1:
      source = two;
      break;
    case 2:
      source = three;
      break;
    case 3:
      source = four;
      break;
    case 4:
      source = five;
      break;
    case 5:
      source = six;
      break;
    case 6:
      source = seven;
      break;
    case 7:
      source = eight;
      break;
    case 8:
      source = nine;
      break;
    case 9:
      source = ten;
      break;
    default:
      source = '';
      break;
  }

  return (
    <StyledContainer>
      <StyledImg alt={props.person.name} src={source} />
      <StyledH2>{props.person.name}</StyledH2>
      <StyledH4>{props.person.gender}</StyledH4>
    </StyledContainer>
  );
};

export default Card;