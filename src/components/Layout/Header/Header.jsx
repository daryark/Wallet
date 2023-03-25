import {
  StyledHeader,
  StyledLogo,
  StyledContainer,
  StyledInfo,
  Separator,
  HeaderRight,
} from './Header.styled';
import { WalletLogo } from 'assets/icons';
import { ExitButton } from './ExitButton';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';
import { FiMoreVertical } from 'react-icons/fi';
import { ThemeSwitcher } from 'components/ThemeButton/ThemeButton';
import LangCheckbox from 'components/LangChekbox/LangChekbox';
import {
  toggleLogoutModalOpen,
  toggleMobileMenuModalOpen,
} from 'redux/global/globalSlice';
import {
  selectIsLogoutModalOpen,
  selectIsMobileMenuModalOpen,
} from 'redux/global/global-selectors';
import { MobileMenuModal } from '../MobileMenuModal/MobileMenuModal';

export const Header = ({ normalizedTheme }) => {
  const dispatch = useDispatch();
  const isLogoutModalOpen = useSelector(selectIsLogoutModalOpen);
  const isMobileMenuModalOpen = useSelector(selectIsMobileMenuModalOpen);
  const { username } = useSelector(selectUser);
  const { isMobile } = useWindowSize();

  const handleMobileMenuModalOpen = () => {
    dispatch(toggleMobileMenuModalOpen());
  };

  const handleLogoutModalOpen = () => {
    dispatch(toggleLogoutModalOpen());
    console.log('logout header');
  };

  return (
    <StyledHeader>
      <StyledContainer style={{ gap: '32px' }}>
        <StyledLogo to="/">
          <WalletLogo width={isMobile ? 30 : 40} />
          Wallet
        </StyledLogo>

        <HeaderRight>
          <StyledInfo>
            <span>{username}</span>
            {isMobile ? (
              <FiMoreVertical
                style={{ width: 'auto', height: '42px' }}
                onClick={handleMobileMenuModalOpen}
              />
            ) : (
              <>
                <Separator />
                <ExitButton onClick={handleLogoutModalOpen} />
              </>
            )}
          </StyledInfo>
          {!isMobile && (
            <StyledInfo style={{ position: 'relative', gap: '3px' }}>
              <LangCheckbox />
              <Separator />
              <ThemeSwitcher />
            </StyledInfo>
          )}
        </HeaderRight>
      </StyledContainer>
      {isLogoutModalOpen && <LogoutModal toggleModal={handleLogoutModalOpen} />}
      {isMobileMenuModalOpen && (
        <MobileMenuModal toggleModal={handleMobileMenuModalOpen} />
      )}
    </StyledHeader>
  );
};
