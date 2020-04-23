import { keyframes } from 'styled-components';
import BgLight from '../assets/svg/BgLight.svg';
import BgDark from '../assets/svg/BgDark.svg';

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

export const lightTheme = {
  colors: {
    primary: '#646ecb',
    text: '#3f3f3f',
    grayText: '#d2d2d2',
    textWhite: '#ffffff',
    background: '#ffffff',
    backgroundTrans: 'rgba(255,255,255,0.7)',
    grayBackground: '#fafafa',
    focusBackground: '#ffffff',
  },
  bgImage: BgLight,
  fadeIn,
  breakpoints: {
    sm: '(min-width: 600px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
  },
};

export const darkTheme = {
  colors: {
    primary: '#646ecb',
    text: '#ffffff',
    grayText: '#515151',
    textWhite: '#ffffff',
    background: '#1c1c1c',
    backgroundTrans: 'rgba(28,28,28,0.7)',
    grayBackground: '#656565',
    focusBackground: '#3f3f3f',
  },
  bgImage: BgDark,
  fadeIn,
  breakpoints: {
    sm: '(min-width: 600px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
  },
};
