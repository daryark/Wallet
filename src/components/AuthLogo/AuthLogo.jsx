import { WalletLogo } from 'assets/icons';
import { useWindowSize } from 'hooks/useWindowSize';

import { AuthLogoContainer } from './AuthLogo.styled';

const AuthLogo = () => {
  const { isMobile } = useWindowSize();

  return (
    <AuthLogoContainer>
      <WalletLogo width={isMobile ? 30 : 40} />
      <span>Wallet</span>
    </AuthLogoContainer>
  );
};

export default AuthLogo;
