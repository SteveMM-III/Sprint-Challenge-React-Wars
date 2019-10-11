import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import Card from './Card';

// Styles
const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

//================ CardCreator ================
const CardCreator = () => {

  const [info, setInfo] = useState([]);

  // get the data and assign it to info
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
      { //  map through array creating cards for each person
        info.map((person, index) => (
          <Card key={index} index={index} person={person} />
        ))
      }
    </StyledContainer>
  );
};

export default CardCreator;