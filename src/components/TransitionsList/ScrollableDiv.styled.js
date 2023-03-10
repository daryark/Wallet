import styled from 'styled-components';

export const StyledScrollableDiv = styled.div`
  height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #c5baff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4a57e2de;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4a56e2;
    border-radius: 10px;
  }
`;
