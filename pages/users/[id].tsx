import React, { useState } from 'react';
import Head from 'next/head';

type User = {
  confirmed: boolean;
  email: string;
  firstName: string;
  handle: string;
  id: number;
  isActive: boolean;
  lastName: string;
  mainGame: string;
  role: string;
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
        <link rel='icon' href='/vdv-logo' />
      </Head>
    </div>
  );
};
export default User;

export async function getServerSideProps(context) {
  // const id = context.params.id;
  const { getUserById } = await import('../../db');
  const product = await getUserById(context.params.id);
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
