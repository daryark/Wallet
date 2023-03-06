import { StyledBackdrop, StyledModal, StyledBtn } from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutRequest } from 'redux/auth/auth-operations';

export const LogoutModal = ({ toggleModal }) => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();

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
        <p>Dear {username}, are you sure you want to Log out? </p>
        <StyledBtn
          primary
          onClick={() => {
            dispatch(logOutRequest());
          }}
        >
          Log Out
        </StyledBtn>
        <StyledBtn onClick={toggleModal}>Go back</StyledBtn>
      </StyledModal>
    </StyledBackdrop>
  );
};
