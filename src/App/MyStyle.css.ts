import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars, responsiveStyle, boxStyles } from 'braid-design-system/css';
import classnames from 'classnames';

export const gradientBackground = style({
  background: `linear-gradient(45deg, ${vars.color.background.brand}, ${vars.color.background.brandAccent})`,
});

export const customPadding = style({
  padding: calc.multiply(vars.grid, 10),
});

export const responsiveBorder = style(
  responsiveStyle({
    mobile: {
      border: `${vars.space.xxsmall} solid ${vars.color.background.positive}`,
    },
    tablet: {
      border: `${vars.space.xsmall} solid ${vars.color.background.caution}`,
    },
    desktop: {
      border: `${vars.space.small} solid ${vars.color.background.critical}`,
    },
  }),
);

export const customBox = classnames(
  boxStyles({
    padding: ['small', 'large', 'xlarge'],
  }),
  responsiveBorder,
);
