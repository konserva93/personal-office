import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

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
