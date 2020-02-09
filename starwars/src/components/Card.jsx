import React from "react";
import styled from 'styled-components';

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
  box-shadow: 0 0 8px yellow;
`;

const StyledH2 = styled.h2`
  text-shadow: 2px 2px black;
  margin-bottom: 0.5rem;
`;

const StyledH4 = styled.h4`
  text-shadow: 2px 2px black;
  margin: 0;
`;

//================ Card ================
const Card = (props) => {

  // array to hold the image paths
  const source = [];

  source.push(one);
  source.push(two);
  source.push(three);
  source.push(four);
  source.push(five);
  source.push(six);
  source.push(seven);
  source.push(eight);
  source.push(nine);
  source.push(ten);

  return (
    <StyledContainer>
      <StyledImg alt={props.person.name} src={source[props.index]} />
      <StyledH2>{props.person.name}</StyledH2>
      <StyledH4>{props.person.gender}</StyledH4>
    </StyledContainer>
  );
};

export default Card;