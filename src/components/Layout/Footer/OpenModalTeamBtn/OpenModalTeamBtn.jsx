import { useDispatch } from 'react-redux';
import { toggleModalTeam } from 'redux/global/globalSlice';
import { StyledOpenTeamModalBtn } from './OpenModalTeamBtn.styled';

export function OpenModalTeamBtn({ children }) {
  const dispatch = useDispatch();
  return (
    <StyledOpenTeamModalBtn
      type="button"
      aria-label="open team modal"
      onClick={() => {
        dispatch(toggleModalTeam());
      }}
    >
      {children}
    </StyledOpenTeamModalBtn>
  );
}
