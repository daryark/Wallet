import styled from 'styled-components';

export const StyledOpenTeamModalBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSizes.xs};

  color: var(--footer-txt-color);
  text-decoration: underline 1px;
  cursor: pointer;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
