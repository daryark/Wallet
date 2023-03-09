import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 100%;
  }

body {
  margin: 0;
  color: ${({ theme }) => theme.color.text_dark};
  background-color: ${({ theme }) => theme.color.bg_grey_main};
  
    backdrop-filter: blur(25px);
  background: ${({ theme }) => theme.color.bg_coverage};
}
/*   
 @media screen and (min-width: 768px) {
    body {
      background-repeat: no-repeat;
    background-image: url(./assets/bg/Ellipse_pink.png),
      url(./assets/bg/Ellipse_purple.png);
    background-position: top 0px right 0px, bottom 0px left 0px;
    }
  } */

  #root {
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
      'header header'
      'sidebar sidebar'
      'main main'
      'footer footer';
@media (min-width: ${theme.breakpoints.sm}) {
      max-width: ${theme.breakpoints.sm};
      grid-template-columns: 100%;
    }
      @media (min-width: ${theme.breakpoints.md}) {
      max-width: ${theme.breakpoints.md};
      grid-template-columns: 100%;
      grid-template-rows: auto 1fr auto;
     
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      max-width: ${({ theme }) => theme.breakpoints.lg};
      grid-template-columns: 480px 800px;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
    }
  }
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: 0;
}
a {
	text-decoration: none;
	color: currentColor;
}
ul,
ol {
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	list-style: none;
}
button {
	padding: 0;
	font-family: inherit;
	cursor: pointer;
}
img {
	display: block;
	max-width: 100%;
	height: auto;
}
svg {
	fill: currentColor;
}

  .isHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export default GlobalStyles;
