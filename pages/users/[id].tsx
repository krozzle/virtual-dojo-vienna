import React, { useState } from 'react';
import Head from 'next/head';
import { withApollo } from '../../apollo/client';
import gql from 'graphql-tag';

const UserQuery = gql`
  query UserQuery($userId: Number!) {
    user(userId: $userId) {
      id
      firstName
      lastName
      handle
      email
      mainGame
      sideGames
      role
    }
  }
`;

const createUserMutation = gql`
  mutation createUserMutation(
    $id: Int!
    $firstName: String!
    $lastName: String!
    $handle: String!
    $email: String!
    $mainGame: String
    $sideGames: String
    $role: String!
    $isActive: Boolean
    $confirmed: Boolean
  ) {
    id
    firstName
    lastName
    handle
    email
    mainGame
    sideGames
    role
    isActive
    confirmed
  }
`;

const UserMutation = gql`
  mutation UserMutation($userId: Number!) {
    user(userId: $userId) {
      handle
      email
      mainGame
      sideGames
    }
  }
`;

type User = {
  id: number;
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  handle: string;
  isActive: boolean;
  role: string;
  mainGame: string;
  sideGames: string;
};
type Props = { user: User };

const User = (props: Props) => {
  if (!props.user) return <div>User not found!</div>;
  // ! this code below is from the nextjs ecommerce proj
  // console.log(props.product);
  // const [total, setTotal] = useState(props.product.price);
  // const [units, setUnits] = useState(1);
  // console.log(props.product);

  // function handleUnits(e) {
  //   setUnits(Number(e.target.value));
  //   setTotal(Number(e.target.value) * props.product.price);
  // }
  // ! this code above is from the nextjs ecommerce proj

  return (
    <div className='container'>
      <Head>
        <title>{props.user.handle}</title>
        <link rel='icon' href='/vdv-logo.jpg' />
      </Head>
      <h1>{props.user.handle}</h1>
      <p>Maingame: {props.user.mainGame}</p>
      <p>Sidegame: {props.user.sideGames}</p>
    </div>
  );
};
export default withApollo(User);

export async function getServerSideProps(context) {
  // const id = context.params.id;
  const { getUserById } = await import('../../db');
  const user = await getUserById(context.params.id);
  // console.log('product', product);
  if (user === undefined) {
    return { props: {} };
  }
  return {
    // will be passed to the page component as props
    props: {
      user,
    },
  };
}
