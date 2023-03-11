import styled from 'styled-components';

export const BalanceBox = styled.div`
  padding: 8px 32px 12px;
  max-width: 395px;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  background-color: ${p => p.theme.color.bg_white};
  border-radius: ${p => p.theme.radii.large};

  & p {
    font-size: 12px;
    text-transform: uppercase;
    color: ${p => p.theme.color.text_grey_balance};
  }
`;

export const BalanceSum = styled.div`
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};

  color: ${p => p.theme.color.text_dark};
`;
