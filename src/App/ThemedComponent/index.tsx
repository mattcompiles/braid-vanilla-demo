import { Box } from 'braid-design-system';
import React from 'react';
import { altTheme, themedStyle } from './ThemedComponent.css';

export default function ThemedComponent() {
  return <Box className={[themedStyle, altTheme]}>Themed Comoonent</Box>;
}
