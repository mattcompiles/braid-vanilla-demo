import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

import MyComponent from './MyComponent';

export default () => (
  <BraidProvider theme={apac}>
    <MyComponent />
  </BraidProvider>
);
