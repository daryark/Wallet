import { StyledContainer } from '../Header/Header.styled';
import { StyledFooter, StyledIconHeart } from './Footer.styled';
import { ModalTeam } from './ModalTeam/ModalTeam';
import { OpenModalTeamBtn } from './OpenModalTeamBtn/OpenModalTeamBtn';

import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <StyledFooter>
        <StyledContainer style={{ justifyContent: 'center' }}>
          <ul className="list">
            <li className="item">© 2023 | {t('footerText')} |&#20;</li>
            <li className="item">
              {t('footerDeveloped')}
              <StyledIconHeart />
              {t('footerBy')} <OpenModalTeamBtn>REACTive</OpenModalTeamBtn>
            </li>
          </ul>
        </StyledContainer>
      </StyledFooter>
      <ModalTeam />
    </>
  );
}
