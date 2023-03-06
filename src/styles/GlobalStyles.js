import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 100%;
  }

body {
  margin: 0;
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
}#root {
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';
    @media (min-width: ${theme.breakpoints.md}) {
      max-width: ${theme.breakpoints.md};
      grid-template-areas:
        'header header'
        'sidebar main'
        'footer footer';
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: ${theme.breakpoints.lg};
    }
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: ${theme.breakpoints.xl};
    }
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
`;

export default GlobalStyles;
