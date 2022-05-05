import React from 'react';

import renderApollo from '../../test-utils';

import { cleanup } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  
  // skipped until below is fixed
  // Invariant failed: You should not use <Link> outside a <Router>
  xit('renders without error', () => {
    renderApollo(<Footer />);
  });
});