import React from 'react';
import { useQuery } from '@apollo/client';
import * as LaunchDetailTypes from '@gqlOps/LaunchDetails';
import LaunchTile from '@components/launch/tile/LaunchTile';
import { GET_LAUNCH } from '@schemas';

type Props = LaunchDetailTypes.LaunchDetailsVariables;

const CartItem: React.FC<Props> = ({ launchId }: Props) => {
  const { data, loading, error } = useQuery<
    LaunchDetailTypes.LaunchDetails,
    LaunchDetailTypes.LaunchDetailsVariables
  >(GET_LAUNCH, { variables: { launchId } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return data.launch && <LaunchTile launch={data.launch} />;
};

export default CartItem;
