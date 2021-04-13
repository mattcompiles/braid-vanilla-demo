import { createGlobalTheme, style, createTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  colors: {
    backgroundColor: 'blue',
    text: 'white',
  },
});

export const altTheme = createTheme(vars, {
  colors: {
    backgroundColor: 'yellow',
    text: 'black',
  },
});

export const themedStyle = style({
  width: '100px',
  height: '100px',
  background: vars.colors.backgroundColor,
  color: vars.colors.text,
});
