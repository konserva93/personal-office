import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-height: 0;
`;

export const Header = styled.div`
  color: cornflowerblue;
  font-size: 22px;
  font-weight: bold;
  padding: 16px 24px;
`;

export const List = styled.div`
  min-width: 300px;
  background-color: #c4c4c4;
`;

export const ListItem = styled.div`
  height: 56px;
  width: 100%;
  border: 1px solid black;
`;

export const ButtonsWrapper = styled.div`
  max-width: 400px;
`;

export const Button = styled.button`
  background-color: wheat;
  height: 36px;
  line-height: 1em;
  min-width: 200px;
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  white-space: nowrap;
`;
