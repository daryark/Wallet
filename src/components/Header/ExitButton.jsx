import { Exit } from 'assets/icons';
import { StyledBtn } from './Header.styled';
import { useWindowSize } from './hooks/useWindowSize';

export const ExitButton = ({ onClick }) => {
  const { isMobile } = useWindowSize();

  return (
    <StyledBtn onClick={onClick} type="button">
      <Exit />
      {!isMobile && 'Exit'}
    </StyledBtn>
  );
};
