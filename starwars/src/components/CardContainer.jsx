import React from 'react';
import styled from 'styled-components';

import CardCreator from './CardCreator';

const StyledContainer = styled.div`
  margin: 0;
  padding: 3rem;
`;

const CardContainer = () => {

  return (
    <StyledContainer>
      <CardCreator />
    </StyledContainer>
  );
};

export default CardContainer;