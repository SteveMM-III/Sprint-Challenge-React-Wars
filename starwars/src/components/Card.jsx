import React from "react";
import styled from 'styled-components';
import axios from 'axios';

// photos
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

const Card = ( props ) => {

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
    <div>
        <img alt={props.name} src={source} />
        <h2>{props.person.name}</h2>
        <h4>{props.person.gender}</h4>
    </div>
  );
};

export default Card;