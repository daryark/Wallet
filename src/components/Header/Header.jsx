import {
  StyledHeader,
  StyledLogo,
  StyledContainer,
  StyledInfo,
  Separator,
} from './styles';
import { WalletLogo } from 'assets/icons';
import { ExitButton } from './ExitButton';
import { useWindowSize } from './hooks/useWindowSize';

export const Header = () => {
  const { isMobile } = useWindowSize();
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo>
          <WalletLogo />
          Wallet
        </StyledLogo>
        <StyledInfo>
          Name
          {!isMobile && <Separator />}
          <ExitButton />
        </StyledInfo>
      </StyledContainer>
    </StyledHeader>
  );
};
