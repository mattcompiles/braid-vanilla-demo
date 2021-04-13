import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    darkBlue: 'blue',
    lightBlue: 'aqua',
    pink: 'pink',
  },
});
