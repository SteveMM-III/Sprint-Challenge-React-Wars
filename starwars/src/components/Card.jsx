import React from "react";
import styled from 'styled-components';
import axios from 'axios';

// photos
import first from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import fourth from './img/4.jpg';
import fifth from './img/5.jpg';
import sixth from './img/6.jpg';
import seventh from './img/7.jpg';
import eighth from './img/8.jpg';
import ninth from './img/9.jpg';
import tenth from './img/10.jpg';

const Card = ( props ) => {
//name
//gender
//img

  let source;
  
  switch (props.index) {
    case 0:
      source = first;
      break;
    case 1:
      source = second;
      break;
    case 2:
      source = third;
      break;
    case 3:
      source = fourth;
      break;
    case 4:
      source = fifth;
      break;
    case 5:
      source = sixth;
      break;
    case 6:
      source = seventh;
      break;
    case 7:
      source = eighth;
      break;
    case 8:
      source = ninth;
      break;
    case 9:
      source = tenth;
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