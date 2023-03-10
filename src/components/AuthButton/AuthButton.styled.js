import styled from 'styled-components';

export const StyledAuthButton = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  /* border: 1px solid black; */
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #4a56e2;

  text-align: center;
  text-transform: uppercase;

  /* font-family: 'Circe'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #4a56e2;

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
