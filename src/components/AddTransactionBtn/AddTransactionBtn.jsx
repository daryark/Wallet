import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AddBtn, AddIcon } from './AddTransactionBtn.styled';
import { useWindowSize } from 'hooks/useWindowSize';

export function AddTransactionBtn() {
  const { isMobile } = useWindowSize();

  const dispatch = useDispatch();

  const scrollToTop = () => {
    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  };

  return (
    <AddBtn
      type="button"
      aria-label="add transaction button"
      onClick={() => {
        scrollToTop();
        dispatch(isModalAddTransactionOpen());
      }}
      className="add-transaction-button"
    >
      <BsFillPlusCircleFill size={44} />
      {/* <div>
        <AddIcon />
      </div> */}
    </AddBtn>
  );
}
