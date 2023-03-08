import { TfiClose } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { ButtonClose } from './ModalCloseBtn.styled';

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
      <TfiClose />
    </ButtonClose>
  );
}

export default ModalCloseBtn;
