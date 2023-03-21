import styled from 'styled-components';

export const StyledAuthButton = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  /* border: 1px solid black; */
  border-radius: 20px;
  background: ${({ theme }) => theme.color.bg_white};
  border: 1px solid ${({ theme }) => theme.color.text_blue};

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

  color: ${({ theme }) => theme.color.text_blue};

  cursor: pointer;

  transition: box-shadow ${({ theme }) => theme.transition};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  &:hover,
  &focus {
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }
`;
