/* eslint-disable import/extensions */
import React, { FC } from 'react';
import * as LaunchTileTypes from '@gqlOps/LaunchTile';
import { StyledLink } from './LaunchTile.styles';
import { getBackgroundImage } from '../utils';

interface Props {
  launch: LaunchTileTypes.LaunchTile;
}

const LaunchTile: FC<Props> = ({ launch }: Props) => {
  const { id, mission, rocket } = launch;
  return (
    <StyledLink
      to={`/launch/${id}`}
      style={{
        backgroundImage: getBackgroundImage(mission?.missionPatch || Number(id)),
      }}
    >
      <h3>{mission ? mission.name : ''}</h3>
      <h5>{rocket && rocket.name}</h5>
    </StyledLink>
  );
};

export default LaunchTile;
