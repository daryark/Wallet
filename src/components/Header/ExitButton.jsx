import { Exit } from 'assets/icons';
import { StyledBtn } from './styles';
import { useWindowSize } from './hooks/useWindowSize';

export const ExitButton = () => {
  const { isMobile } = useWindowSize();

  return (
    <StyledBtn>
      <Exit />
      {!isMobile && 'Exit'}
    </StyledBtn>
  );
};
