import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: auto;
  width: 320px;
  flex-basis: 320px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: steelblue;
  padding: 16px 0;
`;

export const Item = styled.div`
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  font-size: 22px;
  padding: 0 1em;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
