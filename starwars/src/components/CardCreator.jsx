import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import Card from './Card';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
`;

const CardCreator = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => { 
        setInfo(response.data.results); 
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  return (
    <StyledContainer>
      {
        info.map((person, index) => (
          <Card key={index} index={index} person={person} />
        ))
      }
    </StyledContainer>
  );
};

export default CardCreator;