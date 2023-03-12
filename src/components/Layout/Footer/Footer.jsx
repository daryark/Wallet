import { useTranslation } from 'react-i18next';
import { ModalTeam } from './ModalTeam/ModalTeam';
import { OpenModalTeamBtn } from './OpenModalTeamBtn/OpenModalTeamBtn';
import { StyledContainer } from '../Header/Header.styled';
import { StyledFooter, StyledIconHeart } from './Footer.styled';

export function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <StyledFooter as="footer">
        <StyledContainer style={{ justifyContent: 'center' }}>
          <ul className="list">
            <li className="item">© 2023 | {t('footerText')} |&#20;</li>
            <li className="item">
              <span>
                {t('footerDeveloped')} {t('footerBy')}
              </span>
              <OpenModalTeamBtn> REACTive</OpenModalTeamBtn>
              <StyledIconHeart />
            </li>
          </ul>
        </StyledContainer>
      </StyledFooter>
      <ModalTeam />
    </>
  );
}
