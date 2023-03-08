import styled from 'styled-components';

export const StyledAuthButtonActive = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  border-radius: 20px;
  border: none;

  background: #24cca7;

  /* font-family: 'Circe'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #ffffff;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  transition-property: transform;
  transition-duration: 400ms;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
