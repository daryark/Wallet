import LangCheckbox from 'components/LangChekbox/LangChekbox';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';
import {
  StyledBackdrop,
  StyledModal,
} from 'components/LogoutModal/LogoutModal.styled';
import { ThemeSwitcher } from 'components/ThemeButton/ThemeButton';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogoutModalOpen } from 'redux/global/global-selectors';
import { toggleLogoutModalOpen } from 'redux/global/globalSlice';
import { ExitButton } from '../Header/ExitButton';

export function MobileMenuModal({ toggleModal }) {
  const dispatch = useDispatch();
  const isLogoutModalOpen = useSelector(selectIsLogoutModalOpen);

  const handleInsideClick = e => {
    if (e.target !== e.currentTarget) {
      toggleModal();
    }
  };

  const handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const handleLogoutModalOpen = () => {
    dispatch(toggleLogoutModalOpen());
    console.log('logout mobile');
  };

  return (
    <StyledBackdrop
      onClick={handleOutsideClick}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <StyledModal
        onClick={handleInsideClick}
        style={{
          position: 'absolute',
          top: '70px',
          right: '0',
          left: '0',
          padding: '6px 0',
          margin: '0 auto',
          maxWidth: '280px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: '2px',
            // marginTop: '10px',
          }}
        >
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <LangCheckbox />
          </li>
          <li>
            <ExitButton onClick={handleLogoutModalOpen} />
          </li>
        </ul>
        {isLogoutModalOpen && <LogoutModal />}
      </StyledModal>
    </StyledBackdrop>
  );
}
