import styled from 'styled-components';

export const ButtonSubmitStyled = styled.button`
  width: calc(100% + 20px);
  height: 50px;
  margin: 0px -10px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${p => p.theme.color.text_light};
  background-color: ${p => p.theme.color.accent};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => theme.borders.normal} transparent;
  transition: box-shadow ${({ theme }) => theme.transition};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    margin: 0;
  }

  &:hover,
  &focus {
    outline: none;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  }
`;

export const ButtonCancelStyled = styled(ButtonSubmitStyled)`
  color: ${p => p.theme.color.text_blue};
  border: ${({ theme }) => theme.borders.normal}${p => p.theme.color.text_blue};
  background-color: ${p => p.theme.color.bg_white};

  &:hover,
  &focus {
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }
`;
