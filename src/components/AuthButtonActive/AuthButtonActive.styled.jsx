import styled from 'styled-components';

export const StyledAuthButtonActive = styled.button`
  display: block;
  width: 280px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  border-radius: 20px;
  border: none;

  background-color: green;
  color: white;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  transition-property: transform;
  transition-duration: 400ms;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
