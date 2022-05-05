import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('Menu Item', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    xit('renders without error', () => {
        render(<MenuItem to="/wow" />);
    });
});
