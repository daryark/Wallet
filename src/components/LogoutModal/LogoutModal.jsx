import { StyledBackdrop, StyledModal, StyledBtn } from './LogoutModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutRequest } from 'redux/auth/auth-operations';

import { useTranslation } from 'react-i18next';

export const LogoutModal = ({ toggleModal }) => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [toggleModal]);
  const closeModal = e => {
    if (e.target !== e.currentTarget) return;
    toggleModal();
  };
  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal>
        <p>
          {t('modalLogOutQuestionDear')} {username} , {t('modalLogOutQuestion')}
        </p>
        <StyledBtn
          primary
          onClick={() => {
            dispatch(logOutRequest());
          }}
        >
          {t('modalLogOutLogOutBtn')}
        </StyledBtn>
        <StyledBtn onClick={toggleModal}>{t('modalLogOutGoBackBtn')}</StyledBtn>
      </StyledModal>
    </StyledBackdrop>
  );
};
