import { Box, Heading } from 'braid-design-system';
import { BackgroundProvider, Text } from 'braid-design-system';
import React from 'react';

import * as styles from './MyStyle.css';
import ThemedComponent from './ThemedComponent';

export default function MyComponent() {
  return (
    <Box className={styles.customPadding}>
      <Box padding="large" className={styles.gradientBackground}>
        <BackgroundProvider type="dark">
          <Heading level="1">🧁 vanilla-extract</Heading>
        </BackgroundProvider>
      </Box>
      <Box className={styles.customBox}>
        <Text>Custom box</Text>
        <ThemedComponent />
      </Box>
    </Box>
  );
}
