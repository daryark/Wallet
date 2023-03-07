import styled from 'styled-components';

export const StyledAuthButton = styled.button`
  display: block;
  width: 280px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  border: 1px solid black;
  border-radius: 20px;

  text-align: center;
  text-transform: uppercase;

  background-color: transparent;
  color: green;

  cursor: pointer;

  transition-property: transform;
  transition-duration: 400ms;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1199px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;
