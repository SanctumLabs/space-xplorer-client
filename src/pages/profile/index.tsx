import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_TRIPS } from '@schemas';
import Loading from '@components/loading';
import Header from '@components/header';
import LaunchTile from '@components/launch/tile/LaunchTile';
import { RouteComponentProps } from 'react-router-dom';
import * as GetMyTripsTypes from '@gqlOps/GetMyTrips';

type Props = RouteComponentProps;

const Profile: FC<Props> = () => {
  const { data, loading, error } = useQuery<GetMyTripsTypes.GetMyTrips>(GET_MY_TRIPS, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <>
      <Header>My Trips</Header>
      {data.me && data.me.trips.length ? (
        data.me.trips.map((launch: any) => <LaunchTile key={launch.id} launch={launch} />)
      ) : (
        <p>You haven&apost booked any trips</p>
      )}
    </>
  );
};

export default Profile;
