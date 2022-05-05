import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import Header from '@components/header';
import Loading from '@components/loading';
import { GET_CART_ITEMS } from '@schemas';
import { RouteComponentProps } from 'react-router-dom';
import BookTrips from '@containers/BookTrips';
import CartItem from '@containers/CartItem';
import { GetCartItems } from '@gqlOps/GetCartItems';

type Props = RouteComponentProps;

const Cart: FC<Props> = () => {
  const { data, loading, error } = useQuery<GetCartItems>(GET_CART_ITEMS);

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <>
      <Header>My Cart</Header>
      {data?.cartItems.length === 0 ? (
        <p data-testid="empty-message">No items in your cart</p>
      ) : (
        <>
          {data?.cartItems.map((launchId: string) => (
            <CartItem key={launchId} launchId={launchId} />
          ))}
          <BookTrips cartItems={data?.cartItems || []} />
        </>
      )}
    </>
  );
};

export default Cart;
