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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';
import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { ThemeSwitcher } from 'components/ThemeButton/ThemeButton';
import LangCheckbox from 'components/LangChekbox/LangChekbox';

export const Header = ({ normalizedTheme }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { username } = useSelector(selectUser);
  const { isMobile } = useWindowSize();

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo to="/">
          <WalletLogo width={isMobile ? 30 : 40} />
          Wallet
        </StyledLogo>

        <HeaderRight>
          <StyledInfo>
            <span>{username}</span>
            {!isMobile && <Separator />}
            {isMobile ? (
              <FiMoreVertical style={{ width: '32px', height: 'auto' }} />
            ) : (
              <ExitButton onClick={toggleModal} />
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
      {modalOpen && <LogoutModal toggleModal={toggleModal} />}
    </StyledHeader>
  );
};
