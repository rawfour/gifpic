import { keyframes } from 'styled-components';
import BgLight from '../assets/svg/BgLight.svg';
import BgDark from '../assets/svg/BgDark.svg';

const animations = {
  fadeIn: keyframes`
  0% {opacity:0; visibility: hidden;}
  100% {opacity: 1; visibility: visible;}`,
};

const fontSizes = {
  s: '1.4rem',
  m: '1.6rem',
  l: '1.8rem',
  xl: '2rem',
  xxl: '3.5rem',
  xxxl: '4.5rem',
};

const breakpoints = {
  sm: '(min-width: 600px)',
  md: '(min-width: 900px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1920px)',
};

export const lightTheme = {
  colors: {
    primary: '#646ecb',
    text: '#3f3f3f',
    grayText: '#d2d2d2',
    textWhite: '#ffffff',
    background: '#ffffff',
    backgroundTrans: 'rgba(255,255,255,0.7)',
    grayBackground: '#f5f5f5',
    focusBackground: '#ffffff',
  },
  bgImage: BgLight,
  fontSizes,
  animations,
  breakpoints,
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
  fontSizes,
  animations,
  breakpoints,
};
