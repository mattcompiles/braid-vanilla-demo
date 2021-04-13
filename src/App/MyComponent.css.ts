import { style } from '@vanilla-extract/css';

export const root = style({
  background: 'blue',
  color: 'pink',
  padding: 42,
  fontSize: 42,
  ':hover': {
    outline: '10px solid pink',
  },
});
