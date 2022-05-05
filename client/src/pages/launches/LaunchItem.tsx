/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import * as LaunchDetailsTypes from '@gqlOps/LaunchDetails';
import { GET_LAUNCH_DETAILS } from '@schemas';
import Header from '@components/header';
import Loading from '@components/loading';
import LaunchDetail from '@components/launch/detail/LaunchDetail';
import { RouteChildrenProps } from 'react-router-dom';
import ActionButton from '@containers/ActionButton';

const Launch: FC<RouteChildrenProps> = ({
  match: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    params: { launchId },
  },
}: RouteChildrenProps) => {
  const { data, loading, error } = useQuery<
    LaunchDetailsTypes.LaunchDetails,
    LaunchDetailsTypes.LaunchDetailsVariables
  >(GET_LAUNCH_DETAILS, { variables: { launchId } });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      <Header image={data.launch && data.launch.mission && data.launch.mission.missionPatch}>
        {data && data.launch && data.launch.mission && data.launch.mission.name}
      </Header>
      <LaunchDetail {...data.launch} />
      <ActionButton {...data.launch} />
    </>
  );
};

export default Launch;
