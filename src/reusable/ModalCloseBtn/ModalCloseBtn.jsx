import { useDispatch } from 'react-redux';
import { ButtonClose, StyledIconClose } from './ModalCloseBtn.styled';

function ModalCloseBtn({ isRandomModalOpen }) {
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(isRandomModalOpen());
  }

  return (
    <ButtonClose
      type="button"
      aria-label="close button"
      onClick={handleModalClose}
    >
      <StyledIconClose />
    </ButtonClose>
  );
}

export default ModalCloseBtn;
