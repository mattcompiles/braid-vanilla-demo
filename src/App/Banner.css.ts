import { mapToStyles, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const variants = mapToStyles({
  primary: {
    background: vars.colors.darkBlue,
    color: vars.colors.pink,
  },
  secondary: {
    background: vars.colors.lightBlue,
    color: vars.colors.darkBlue,
  },
});

export const banner = style({
  padding: 42,
  fontSize: 42,
  ':hover': {
    outline: `10px solid ${vars.colors.pink}`,
  },
});
