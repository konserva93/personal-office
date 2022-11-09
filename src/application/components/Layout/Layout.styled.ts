import styled from 'styled-components/macro';

type FlexAreaProps = {
  flexDirection: 'row' | 'column';
};

export const FlexArea = styled.div`
  ${({ flexDirection }: FlexAreaProps) => `
    display: flex;
    flex-direction: ${flexDirection};
    height: 100vh;
    background-color: #cfcfcf;
    gap: 16px;
  `}

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
  }
`;
