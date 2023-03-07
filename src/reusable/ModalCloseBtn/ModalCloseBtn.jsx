import { TfiClose } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { ButtonClose } from './ModalCloseBtn.styled';

function ModalCloseBtn() {
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(isModalAddTransactionOpen());
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
