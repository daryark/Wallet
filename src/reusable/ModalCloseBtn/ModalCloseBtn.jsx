import { TfiClose } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { ButtonClose } from './ModalCloseBtn.styled';

function ModalCloseBtn() {
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(toggleModal());
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
