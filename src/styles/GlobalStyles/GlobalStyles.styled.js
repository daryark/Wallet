import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

body {
  margin: 0;
  color: ${({ theme }) => theme.color.text_dark};
  background-color: ${({ theme }) => theme.color.bg_grey_main};
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #c5baff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.accent};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.accent};
    border-radius: 10px;
  }
  /* background: ${({ theme }) => theme.color.bg_coverage}; */
}


  #root {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto ;
    grid-template-areas:
      'header'
      'main'
      'footer ';
/* @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-width: ${({ theme }) => theme.breakpoints.sm}; */
      /* grid-template-columns: 100%; */
    }
      /* @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: ${({ theme }) => theme.breakpoints.md}; */
      /* grid-template-rows: auto auto 1fr auto; */
      
     
    /* } */
    /* @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      max-width: ${({ theme }) => theme.breakpoints.lg}; */
      /* grid-template-columns: 480px 800px; */
      /* grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer'; */
    /* } */
  /* } */
  
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
