import { Exit } from 'assets/icons';
import { StyledBtn } from './Header.styled';
import { useWindowSize } from '../../../hooks/useWindowSize';

import { useTranslation } from 'react-i18next';

export const ExitButton = ({ onClick }) => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslation();

  return (
    <StyledBtn onClick={onClick} type="button">
      <Exit />
      {!isMobile && t('headerExitBtn')}
    </StyledBtn>
  );
};
