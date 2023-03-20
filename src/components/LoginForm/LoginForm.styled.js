// import styled from 'styled-components';

// export const LoginBox = styled.div`
//   padding: 107px 0px 107px;

//   @media screen and (min-width: 768px) {
//     padding: 40px 0px 62px;
//     margin: 0 auto;
//     width: 532px;
//     height: 468px;

//     background-color: white;
//     border-radius: 20px;
//   }
// `;

import styled from 'styled-components';

export const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.color.bg_white};
  height: 100vh;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    padding: 40px 58px 62px 65px;
    margin: 0 auto;
    width: 532px;
    height: 468px;

    border-radius: 20px;
  }
`;
