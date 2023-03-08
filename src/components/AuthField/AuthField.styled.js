import { Field } from 'formik';

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

export const InputLabel = styled.label`
  position: relative;
  display: block;
  width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 410px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 2;
    color: grey;
  }
`;

export const Label = styled.span`
  display: block;

  text-align: left;
`;

export const Input = styled.input`
  /* @include font-circe-small; */
  display: flex;
  margin-bottom: 40px;
  padding-left: 54px;
  width: 100%;
  height: 36px;

  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  &::placeholder {
    color: grey;
  }
`;

export const ErrorMessage = styled.div`
  text-align: right;
  position: absolute;
  top: 115%;

  font-size: 12px;
  color: red;
`;
