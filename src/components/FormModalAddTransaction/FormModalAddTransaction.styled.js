import styled from 'styled-components';
import { Form } from 'formik';

export const FormModalAddTransactionStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }

  & .switcher {
    width: 235px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 16px;
    line-height: calc(24 / 16);
    color: #e0e0e0;

    & .income {
      color: #24cca7;
    }

    & .expense {
      color: #ff6596;
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
        bottom: -3px;
        transition: 0.4s;
        border-radius: 50%;
        background-color: #24cca7;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 768 768'%3E%3Cpath d='M607.5 415.5h-192v192h-63v-192h-192v-63h192v-192h63v192h192v63z'/%3E%3C/svg%3E");
        box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
        -webkit-transition: 0.4s;
      }
    }

    &__checkbox:checked + .switcher__toggle:before {
      background-color: #ff6596;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 768 768'%3E%3Cpath d='M607.5 415.5h-447v-63h447v63z'/%3E%3C/svg%3E");
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
  & select {
    max-height: 32px;
  }

  & input,
  & textarea,
  & select {
    font-family: inherit;
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

    &.isHidden {
      margin-bottom: 0;
    }
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
  }

  & .btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    & button {
      font-family: inherit;
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
