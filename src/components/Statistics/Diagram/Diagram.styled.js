import styled from 'styled-components';

export const DiagramWrapper = styled.div`
  min-width: 280px;
  min-height: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 336px;
    min-height: 336px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 288px;
    min-height: 288px;
  }

  & canvas {
    min-width: 100%;
    min-height: 100%;
  }
`;
