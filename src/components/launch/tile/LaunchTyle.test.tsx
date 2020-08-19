import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LaunchTile from './LaunchTile';

describe('Launch Tile', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    xit('renders without error', () => {
        render(
            <LaunchTile
                launch={{
                    __typename: 'Launch',
                    isBooked: false,
                    id: '1',
                    mission: { name: 'the first one', __typename: 'Mission', missionPatch: null },
                    rocket: { name: 'harambe', __typename: 'Rocket', id: '1' },
                }}
            />,
        );
    });
});