import {
  StyledHeader,
  StyledLogo,
  StyledContainer,
  StyledInfo,
  Separator,
} from './Header.styled';
import { WalletLogo } from 'assets/icons';
import { ExitButton } from './ExitButton';
import { useWindowSize } from './hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';
import { useState } from 'react';

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
        <StyledLogo>
          <WalletLogo width={isMobile ? 30 : 40} />
          Wallet
        </StyledLogo>
        <StyledInfo>
          {username}
          {!isMobile && <Separator />}
          <ExitButton onClick={toggleModal} />
        </StyledInfo>
      </StyledContainer>
      {modalOpen && <LogoutModal toggleModal={toggleModal} />}
    </StyledHeader>
  );
};
