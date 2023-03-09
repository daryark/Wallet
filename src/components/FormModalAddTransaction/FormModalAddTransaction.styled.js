import styled from 'styled-components';
import { Form } from 'formik';
import { RiCalendar2Fill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const MinusIconStyled = styled(AiOutlineMinus)`
  position: absolute;
  fill: #fff;
  width: 27px;
  height: auto;
  top: 8px;
  left: 79px;
  z-index: 1;
`;

export const PlusIconStyled = styled(AiOutlinePlus)`
  position: absolute;
  fill: #fff;
  width: 27px;
  height: auto;
  top: 8px;
  right: 85px;
  z-index: 1;
`;

export const CalendarIconStyled = styled(RiCalendar2Fill)`
  fill: #4a56e2;
  min-width: 18px;
  min-height: 20px;
  position: absolute;
  top: 2px;
  right: 14px;
`;

export const FormModalAddTransactionStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & .switcher {
    width: 235px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 16px;
    line-height: calc(24 / 16);
    color: #e0e0e0;

    /* .switcher__checkbox:checked & .income { // НЕ ПРАЦЮЄ
      color: #24cca7;
    } */

    & .income {
      /* color:; */
    }
    & .expense {
      /* color:; */
    }

    &__box {
      position: relative;
      display: inline-block;
      width: 80px;
      height: 40px;
    }

    &__checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }

    &__toggle {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      -webkit-transition: 0.4s;
      border-radius: 30px;
      border: 1px solid #e0e0e0;
      transition: 0.4s;

      &:before {
        position: absolute;
        content: '';
        height: 44px;
        width: 44px;
        left: -4px;
        bottom: -2px;
        transition: 0.4s;
        border-radius: 50%;
        background-color: #24cca7;
        box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
        -webkit-transition: 0.4s;
      }
    }

    &__checkbox:checked + .switcher__toggle:before {
      background-color: #ff6596;
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      -webkit-transform: translateX(44px);
      -ms-transform: translateX(44px);
      transform: translateX(44px);
    }
  }

  & textarea {
    resize: none;
  }

  & input,
  & textarea,
  & select {
    font-family: 'Circe';
    width: 100%;
    padding: 0 20px 8px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e0e0e0;

    font-weight: 400;
    font-size: 18px;
    line-height: calc(27 / 18);

    @media screen and (min-width: 768px) {
      padding: 0 8px 8px;
    }

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #fff inset;
    }

    &::placeholder {
      color: #bdbdbd;
    }
  }

  & .category {
    width: 100%;
  }

  & .amount-date-wrapper {
    position: relative;

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    & .amount {
      font-weight: 700;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        /* display: none; */
        -webkit-appearance: none;
        -moz-appearance: textfield;
        margin: 0;
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 0 30px;

      & .amount {
        width: calc((100% - 30px) / 2);
        text-align: center;
      }

      & .date {
        width: calc((100% - 30px) / 2);
      }
    }
  }

  & input.form-control {
    padding: 0 20px 8px;
    font-family: 'Circe';
  }

  & .comment {
  }

  & .btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    & button {
      font-family: 'Circe';
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin: 0px -10px;
      width: calc(100% + 20px);
      height: 50px;
      border-radius: 20px;

      @media screen and (min-width: 768px) {
        width: 300px;
        margin: 0;
      }
    }
  }

  & .submit-btn {
    border: 1px solid transparent;
    color: #fff;
    background-color: #24cca7;
    transition: box-shadow 0.25s ease;

    &:hover,
    &focus {
      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    }
  }

  & .cancel-btn {
    color: #4a56e2;
    border: 1px solid #4a56e2;
    background-color: #fff;
    transition: box-shadow 0.25s ease;

    &:hover,
    &focus {
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }
  }
`;
