/* eslint-disable arrow-body-style */
import { Box, Heading } from 'braid-design-system';
import { BackgroundProvider, Text } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './MyStyle.treat';

export default () => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.customPadding}>
      <Box padding="large" className={styles.gradientBackground}>
        <BackgroundProvider type="dark">
          <Heading level="1">🧁 vanilla-extract</Heading>
        </BackgroundProvider>
      </Box>
      <Box
        padding={['small', 'large', 'xlarge']}
        className={styles.responsiveBorder}
      >
        <Text>Custom box</Text>
      </Box>
    </Box>
  );
};
