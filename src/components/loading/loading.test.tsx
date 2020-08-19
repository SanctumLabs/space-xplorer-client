import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error', () => {
        render(<Loading />);
    });
});