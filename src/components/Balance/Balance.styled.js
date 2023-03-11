import styled from 'styled-components';

export const BalanceBox = styled.div`
  padding: 8px 32px 12px;
  max-width: 395px;
  background-color: ${p => p.theme.color.bg_white};
  border-radius: ${p => p.theme.radii.large};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  & p {
    font-size: 12px;
    color: ${p => p.theme.color.text_grey_balance};
    text-transform: uppercase;
  }
`;

export const BalanceSum = styled.div`
  color: ${p => p.theme.color.text_dark};
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
`;
