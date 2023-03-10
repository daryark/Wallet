import styled from 'styled-components';
import { Diagram } from './Diagram/Diagram';


const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 8px;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Statistics = () => {
  return (
    <div>
      <Title>Statistics</Title>
      <Diagram />
    </div>
  );
};
