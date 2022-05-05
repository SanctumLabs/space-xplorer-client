import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageContainer from './index';

describe('Page Container', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error', () => {
        render(<PageContainer />);
    });
});