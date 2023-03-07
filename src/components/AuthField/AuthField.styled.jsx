import { Field } from 'formik';
import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  display: flex;
  margin-bottom: 40px;
  padding-left: 54px;
  width: 100%;
  height: 36px;

  outline: none;
  border: none;
  border-bottom: 1px solid grey;
`;

export const InputBox = styled.div`
  position: relative;
  display: block;
  width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 410px;
  }
`;
export const StyledIcon = styled(FaBeer)`
  position: absolute;
  bottom: 25%;
  left: 10px;
  color: grey;
`;
