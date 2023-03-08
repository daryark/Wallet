import { useDispatch } from 'react-redux';
import { toggleModalTeam } from 'redux/global/globalSlice';
import { IconHeart, OpenTeamModal } from './OpenModalTeamBtn.styled';

function OpenModalTeamBtn() {
  const dispatch = useDispatch();
  return (
    <OpenTeamModal
      type="button"
      aria-label="open team modal"
      onClick={() => {
        dispatch(toggleModalTeam());
      }}
    >
      <span>Creators</span>
      <IconHeart />
    </OpenTeamModal>
  );
}

export default OpenModalTeamBtn;
