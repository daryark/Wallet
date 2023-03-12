import { MdAttachMoney, MdHome } from 'react-icons/md';
import { SlGraph } from 'react-icons/sl';
import {
  StyledSideBar,
  StyledBtn,
  StyledIcon,
  StyledAside,
} from './SideBar.styled';
import { useWindowSize } from 'hooks/useWindowSize';
import { routes } from 'routes';
import { Balance } from 'components';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslation();
  return (
    <StyledAside>
      <div>
        <StyledSideBar>
          <StyledBtn to={routes.HOME}>
            <StyledIcon>
              <MdHome />
            </StyledIcon>
            {!isMobile && t('navHomeLink')}
          </StyledBtn>
          <StyledBtn to={routes.STATISTICS_PAGE}>
            <StyledIcon>
              <SlGraph />
            </StyledIcon>
            {!isMobile && t('navStatisticsLink')}
          </StyledBtn>
          {isMobile && (
            <StyledBtn to={routes.CURRENCY_PAGE}>
              <StyledIcon>
                <MdAttachMoney />
              </StyledIcon>
            </StyledBtn>
          )}
        </StyledSideBar>
        {!isMobile && <Balance />}
      </div>
      {!isMobile && <CurrencyPage />}
    </StyledAside>
  );
};
