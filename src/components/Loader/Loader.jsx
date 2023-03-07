import { StyledLoader, StyledBG } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledBG>
      <StyledLoader>
        <div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
        <div id="fourth"></div>
      </StyledLoader>
    </StyledBG>
  );
};
