import { icons } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { SlGraph } from 'react-icons/sl';
import { TbCurrencyDollar } from 'react-icons/tb';
import { StyledSideBar, StyledBtn, StyledIcon } from './SideBar.styled';
import { useWindowSize } from 'components/Header/hooks/useWindowSize';
import { routes } from 'routes';

export const Sidebar = () => {
  const { isMobile } = useWindowSize();
  return (
    <StyledSideBar>
      <StyledBtn to={routes.HOME}>
        <StyledIcon>
          <MdHome />
        </StyledIcon>
        {!isMobile && 'Home'}
      </StyledBtn>
      <StyledBtn to={routes.STATISTICS_PAGE}>
        <StyledIcon>
          <SlGraph />
        </StyledIcon>
        {!isMobile && 'Statistics'}
      </StyledBtn>
      {isMobile && (
        <StyledBtn to={routes.CURRENCY_PAGE}>
          <StyledIcon>
            <TbCurrencyDollar />
          </StyledIcon>
        </StyledBtn>
      )}
    </StyledSideBar>
  );
};
