import { FcGoogle } from 'react-icons/fc';
import { StyledGoogleRegister } from './GoogleRegister.styled';

export function GoogleRegister() {
  return (
    <StyledGoogleRegister>
      <p className="google__text">Sign in with</p>
      <a
        className="google__btn"
        href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com&prompt=consent&redirect_uri=https%3A%2F%2Fkapusta-backend.goit.global%2Fauth%2Fgoogle-redirect&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile"
      >
        <FcGoogle width="24" height="24" />
        google
      </a>
    </StyledGoogleRegister>
  );
}
