/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import { LaunchDetails_launch } from '@gqlOps/LaunchDetails';
import { Card } from './LaunchDetail.styles';
import { getBackgroundImage } from '../utils';

type Props = Partial<LaunchDetails_launch>;

const LaunchDetail: FC<Props> = ({ id, site, rocket, mission }: Props) => (
  <Card
    style={{
      backgroundImage: getBackgroundImage(mission?.missionPatch || Number(id)),
    }}
  >
    <h3>
      {rocket && rocket.name} ({rocket && rocket.type})
    </h3>
    <h5>{site}</h5>
  </Card>
);

export default LaunchDetail;
