import styled from 'styled-components';

export const StyledAuthButtonActive = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  border-radius: 20px;
  border: none;

  background: ${({ theme }) => theme.color.accent};

  /* font-family: 'Circe'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.bg_white};

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  transition: box-shadow ${({ theme }) => theme.transition};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &focus {
    outline: none;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  }
`;
