import styled from 'styled-components';

export const LoaderModalAddTransactionStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 30px;
  font-size: 100px;
  color: ${({ isIncome }) => (isIncome ? 'green' : '#ff3333')};
`;
