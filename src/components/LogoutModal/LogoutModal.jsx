import {
  StyledBackdrop,
  StyledModal,
  StyledBtn,
  StyledBtnBack,
} from './LogoutModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutRequest } from 'redux/auth/auth-operations';
import { useTranslation } from 'react-i18next';
import { toggleLogoutModalOpen } from 'redux/global/globalSlice';

export const LogoutModal = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(toggleLogoutModalOpen());
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  const closeModal = e => {
    console.dir(e.target);
    if (e.target === e.currentTarget || e.target.nodeName === 'BUTTON')
      dispatch(toggleLogoutModalOpen());
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal>
        <p>
          {t('modalLogOutQuestionDear')} {username} , {t('modalLogOutQuestion')}
        </p>
        <StyledBtn primary onClick={() => dispatch(logOutRequest())}>
          {t('modalLogOutLogOutBtn')}
        </StyledBtn>
        <StyledBtnBack>{t('modalLogOutGoBackBtn')}</StyledBtnBack>
      </StyledModal>
    </StyledBackdrop>
  );
};
