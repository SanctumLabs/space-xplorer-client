import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error', () => {
        render(<Header />);
    });
});
