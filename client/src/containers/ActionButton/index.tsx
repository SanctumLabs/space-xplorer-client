/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */

import React, { FC, useState } from 'react';
import { useMutation, Reference } from '@apollo/client';
import Button from '@components/button';
import { cartItemsVar } from '@cache';
import * as LaunchDetailTypes from '@gqlOps/LaunchDetails';
import { CANCEL_TRIP, REMOVE_LAUNCH } from '@schemas';
import { readRecord } from '@localStorage';

type Props = Partial<LaunchDetailTypes.LaunchDetails_launch>;

const CancelTripButton: FC<Props> = ({ id }: Props) => {
  const [mutate, { loading, error }] = useMutation(CANCEL_TRIP, {
    variables: { launchId: id },

    update(cache, { data: { cancelTrip } }) {
      // Update the users list of trips in the cache to remove the trip that
      // was just cancelled.
      const launch = cancelTrip.launches[0];
      cache.modify({
        id: `User:${readRecord('userId')}`,
        fields: {
          trips(existingTrips) {
            const launchRef = cache.writeFragment({
              data: launch,
              fragment: REMOVE_LAUNCH,
            });
            return existingTrips.filter((tripRef: Reference) => tripRef === launchRef);
          },
        },
      });
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div>
      <Button onClick={() => mutate()} data-testid="action-button">
        Cancel This Trip
      </Button>
    </div>
  );
};

const ToggleTripButton: FC<Props> = ({ id }: Props) => {
  const cartItems = cartItemsVar();
  const isInCart = id ? cartItems.includes(id) : false;
  const [, toggleTrip] = useState(isInCart);
  return (
    <div>
      <Button
        onClick={() => {
          if (id) {
            cartItemsVar(isInCart ? cartItems.filter((i) => i !== id) : [...cartItems, id]);
            // Trigger a re-render to pick up the `cartItemsVar` changes.
            toggleTrip(!isInCart);
          }
        }}
        data-testid="action-button"
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
};

const ActionButton: FC<Props> = ({ isBooked, id }: Props) =>
  isBooked ? <CancelTripButton id={id} /> : <ToggleTripButton id={id} />;

export default ActionButton;
