import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-bottom: ${p => p.theme.space[2]}px;
  min-width: 280px;
  max-width: 500px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bg_white};

  font-size: ${p => p.theme.fontSizes.s};
  &:last-of-type {
    margin-bottom: none;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 4px 15px;

  border-left: 5px solid
    ${({ type, theme }) =>
      type === 'EXPENSE' ? theme.color.accent : theme.color.text_pink};
  border-bottom: ${p => p.theme.borders.normal} #dcdcdf;
  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-of-type {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const StyledSum = styled.span`
  color: ${({ type, theme }) =>
    type === 'EXPENSE' ? theme.color.accent : theme.color.text_pink};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const StyledSpan = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledDeleteBtn = styled.button`
  width: 90px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.color.text_light};
  background-color: ${p => p.theme.color.accent};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.small};
`;

export const StyledEditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.color.text_dark};
  background-color: transparent;
  padding: 0;
  border: none;
`;

// ====================================== styled for tablet and desktop
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  text-align: center;
`;

export const StyledThead = styled.thead`
  width: 100%;
  position: sticky;
  z-index: 100;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.color.bg_white};
  border-radius: ${p => p.theme.radii.large};
  padding: 16px 20px;
`;

export const StyledTbody = styled.tbody`
  /* width: 100%; */
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StyledRow = styled.tr`
  padding: 14px 20px;
  border-bottom: ${p => p.theme.borders.normal} #dcdcdf;
  &:last-of-type {
    border-bottom: none;
  }
  /* width: 100%;
  display: inline-block;
   
   */
`;
