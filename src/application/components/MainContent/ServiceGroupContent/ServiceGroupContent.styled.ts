import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
  padding: 24px;
  background-color: #cfcfcf;
`;

type FlexAreaProps = {
  flexDirection: 'row' | 'column';
};

export const FlexArea = styled.div`
  ${({ flexDirection }: FlexAreaProps) => `
    display: flex;
    flex-direction: ${flexDirection};
    height: 100%;
    width: 100%;
    gap: 16px;
  `}

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
  }
`;
