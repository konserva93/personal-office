import styled from 'styled-components';

type Props = {
  display: 'flex';
  flexDirection?: 'row' | 'column';
};

export const Content = styled.div`
  ${({ display, flexDirection }: Props) => `
  display: ${display};
  ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
  height: 100vh;
  background-color: #cfcfcf;
`}
`;
