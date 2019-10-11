import React from 'react';
import styled from 'styled-components';

import CardCreator from './CardCreator';

const StyledContainer = styled.div`
  margin: 0;
  padding: 3rem;
`;

const CardsDisplay = () => {

  return (
    <StyledContainer>
      <CardCreator />
    </StyledContainer>
  );
};

export default CardsDisplay;