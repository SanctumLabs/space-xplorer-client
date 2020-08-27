import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@components/button';
import { cartItemsVar } from '@cache';
import { BOOK_TRIPS } from '@schemas';
import * as GetCartItemsTypes from '@gqlOps/GetCartItems';
import * as BookTripsTypes from '@gqlOps/BookTrips';

type Props = GetCartItemsTypes.GetCartItems;

const BookTrips: FC<Props> = ({ cartItems }: Props) => {
  const [bookTrips, { data }] = useMutation<
    BookTripsTypes.BookTrips,
    BookTripsTypes.BookTripsVariables
  >(BOOK_TRIPS, {
    variables: { launchIds: cartItems },
  });

  const handleBookAll = async (): Promise<void> => {
    await bookTrips();
    cartItemsVar([]);
  };

  return data && data.bookTrips && !data.bookTrips.success ? (
    <p data-testid="message">{data.bookTrips.message}</p>
  ) : (
    <Button onClick={handleBookAll} data-testid="book-button">
      Book All
    </Button>
  );
};

export default BookTrips;
