import { style } from 'sku/treat';

export const gradientBackground = style((theme) => ({
  background: `linear-gradient(45deg, ${theme.color.background.brand}, ${theme.color.background.brandAccent})`,
}));

export const customPadding = style((theme) => ({
  padding: theme.grid * 10,
}));

export const responsiveBorder = style((theme) =>
  theme.utils.responsiveStyle({
    mobile: {
      border: `${theme.space.xxsmall * theme.grid}px solid ${
        theme.color.background.positive
      }`,
    },
    tablet: {
      border: `${theme.space.xsmall * theme.grid}px solid ${
        theme.color.background.caution
      }`,
    },
    desktop: {
      border: `${theme.space.small * theme.grid}px solid ${
        theme.color.background.critical
      }`,
    },
  }),
);
