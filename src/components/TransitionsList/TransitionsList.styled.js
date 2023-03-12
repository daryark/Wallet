import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-bottom: ${p => p.theme.space[2]}px;
  min-width: 280px;
  max-width: 715px;
  border-radius: 10px;
  overflow: hidden;
  color: ${p => p.theme.color.text_dark};
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

  position: relative;

  &::before {
    content: '';
    width: 5px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${({ type, theme }) =>
      type === 'INCOME' ? theme.color.accent : theme.color.text_pink};
  }

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
    type === 'INCOME' ? theme.color.accent : theme.color.text_pink};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const StyledSpan = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledDeleteBtn = styled.button`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  width: 75px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.color.text_light};
  background-color: ${p => p.theme.color.accent};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.small};
  transition: background-color ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.text_pink};
  }
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
  transition: color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.color.text_pink};
  }
`;

// ====================================== styled for tablet and desktop
export const StyledAmount = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${({ type, theme }) =>
    type === '+' ? theme.color.accent : theme.color.text_pink};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
`;

export const StyledBox = styled.div`
  & .ant-table-wrapper {
    & .ant-table-container table > thead > tr > :first-child {
      border-start-start-radius: ${p => p.theme.radii.large};
      border-end-start-radius: ${p => p.theme.radii.large};
    }
    & .ant-table-container table > thead > tr > :last-child {
      display: none; //to fix border white line
      border-start-end-radius: ${p => p.theme.radii.large};
      border-end-end-radius: ${p => p.theme.radii.large};
    }
    & .ant-table-body {
      overflow-y: auto !important;
      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #c5baff;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${p => p.theme.color.text_pink};
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${p => p.theme.color.text_pink};
        border-radius: 10px;
      }
    }
    & .ant-table-tbody > tr > td {
      padding: 14px 20px;
    }
    & .ant-table {
      border: none;
      color: ${p => p.theme.color.text_dark};
      background-color: transparent;

      & .ant-table-header {
        border-start-end-radius: ${p => p.theme.radii.large};
        border-end-end-radius: ${p => p.theme.radii.large};
      }
    }
    & .ant-table-thead > tr > th {
      padding: 16px 17px;
      color: ${p => p.theme.color.text_dark};
      background-color: ${p => p.theme.color.bg_white};
      border: none;
    }
    & .ant-table-column-sorters:hover .ant-table-column-sorter {
      color: ${p => p.theme.color.accent};
    }

    & .ant-table-thead th.ant-table-column-has-sorters:hover {
      background: ${p => p.theme.color.bg_thead};
    }
    & td.ant-table-column-sort {
      background: ${p => p.theme.color.bg_thead};
    }
    & .ant-table-tbody > tr.ant-table-row:hover > td {
      background: ${p => p.theme.color.bg_tbody};
    }
  }

  & .ant-table-content {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    background-color: transparent;
  }

  & .ant-table-thead {
    width: 100%;
    position: sticky;
    z-index: 1;
    font-size: 17px;
    font-family: 'Circe';
    font-weight: ${p => p.theme.fontWeights.bold};
    background-color: ${p => p.theme.color.bg_white};

    & .ant-table-cell {
      background-color: transparent;
      border-bottom: none;
      &::before {
        background-color: transparent;
        display: none;
      }
    }
  }
  & .ant-table-tbody {
    background-color: transparent;
  }
  & .ant-table-row {
    padding: 14px 20px;
    border-bottom: ${p => p.theme.borders.normal} #dcdcdf;
    font-size: ${p => p.theme.fontSizes.s};
    background-color: transparent;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const StyledNoTransactionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 30px;
  background-color: ${p => p.theme.color.bg_white};
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
`;

// =====================LoaderDel=====================================

export const LoaderDelBtn = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;

  &:after {
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${p => p.theme.color.text_light};
    border-color: ${p => p.theme.color.text_light} transparent
      ${p => p.theme.color.text_light} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
