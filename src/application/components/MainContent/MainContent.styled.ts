import styled from 'styled-components/macro';

export const Content = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  header {
    flex-grow: 0;
    flex-shrink: 0;
  }

  > div {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
  }
`;
