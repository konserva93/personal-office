import styled from 'styled-components/macro';

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  > div {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
  }
`;
