import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
  padding: 24px;
  background-color: #cfcfcf;
  overflow: auto;
`;

type FlexAreaProps = {
  flexDirection: 'row' | 'column';
};

export const FlexArea = styled.div`
  ${({ flexDirection }: FlexAreaProps) => `
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    height: auto;
    min-width: min-content;
    gap: 16px;
  `}

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: min-content;
  }
`;
