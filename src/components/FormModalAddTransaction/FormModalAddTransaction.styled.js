import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

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

    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: calc(24 / 16);
    color: ${p => p.theme.color.text_grey_secondary};

    & .income {
      color: ${p => p.theme.color.accent};
      transition: color 0.4s ease-in-out;
    }

    & .expense {
      color: ${p => p.theme.color.text_pink};
      transition: color 0.4s ease-in-out;
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
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${p => p.theme.color.bg_white};
      border-radius: ${p => p.theme.radii.large};
      border: ${p => p.theme.borders.normal}${p => p.theme.color.text_grey_secondary};
      transition: transform 0.4s ease-in-out;
      -webkit-transition: transform 0.4s ease-in-out;
      cursor: pointer;

      &:before {
        position: absolute;
        content: '';
        height: 44px;
        width: 44px;
        left: -4px;
        bottom: -3px;
        border-radius: ${p => p.theme.radii.round};
        box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
        background-color: ${p => p.theme.color.accent};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 768 768'%3E%3Cpath d='M607.5 415.5h-192v192h-63v-192h-192v-63h192v-192h63v192h192v63z'/%3E%3C/svg%3E");
        transition: transform 0.4s ease-in-out;
        -webkit-transition: transform 0.4s ease-in-out;
      }
    }

    &__checkbox:checked + .switcher__toggle:before {
      background-color: ${p => p.theme.color.text_pink};
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
    color: ${p => p.theme.color.text_dark};
    background-color: transparent;
    border: ${p => p.theme.borders.none};
    border-bottom: ${p => p.theme.borders.normal}${p => p.theme.color.text_grey_secondary};

    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: calc(27 / 18);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 8px 8px;
    }

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px ${p => p.theme.color.bg_white} inset;
    }

    &::placeholder {
      color: #bdbdbd;
    }
  }

  & .category-wrapper {
    width: 100%;
    transition: margin 0.4s ease;

    &.isHidden {
      margin-bottom: 0;
    }
  }

  & .amount-date-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    & .amount-wrapper,
    & .date-wrapper {
      position: relative;
    }

    & .amount {
      font-weight: ${p => p.theme.fontWeights.bold};

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        /* display: none; */
        -webkit-appearance: none;
        -moz-appearance: textfield;
        margin: 0;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      gap: 0 30px;

      & .amount-wrapper {
        width: calc((100% - 30px) / 2);
      }

      & .date-wrapper {
        width: calc((100% - 30px) / 2);
      }

      & .amount {
        width: 100%;
        text-align: center;
      }

      & .date {
        width: 100%;
      }
    }
  }

  & .btns-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  top: 36px;
  left: 0;
  color: #ff3333;
`;
