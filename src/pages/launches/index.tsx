/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '@schemas';
import * as GetLaunchListTypes from '@gqlOps/GetLaunchList';
import Loading from '@components/loading';
import LaunchTile from '@components/launch/tile/LaunchTile';
import Header from '@components/header';
import Button from '@components/button';

const Launches: FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    GetLaunchListTypes.GetLaunchList,
    GetLaunchListTypes.GetLaunchListVariables
  >(GET_LAUNCHES);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <Loading />;
  if (error || !data) return <p>Error</p>;

  const handleLoadMore = async (): Promise<void> => {
    setIsLoadingMore(true);
    await fetchMore({
      variables: {
        after: data.launches.cursor,
      },
    });
    setIsLoadingMore(false);
  };

  return (
    <>
      <Header />
      {data.launches &&
        data.launches.launches &&
        data.launches.launches.map((launch: any) => (
          <LaunchTile launch={launch} key={launch?.id} />
        ))}
      {data.launches &&
        data.launches.hasMore &&
        (isLoadingMore ? <Loading /> : <Button onClick={handleLoadMore}>Load More</Button>)}
    </>
  );
};

export default Launches;
