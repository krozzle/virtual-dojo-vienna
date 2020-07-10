import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Users = {
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

type Props = { users: Users };

const UsersPage = (props: Props) => {
  console.log(props.users);
  const users = props.users ? props.users : [];
  return (
    <div>
      <Head>
        <title>{props.users.handle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <div className='column'>
          <p className='description'>
            <code>welcome to</code>
          </p>
          <h1>The Smelly Husband's</h1>
          <p>
            <code>online store</code>
          </p>
        </div>

        <div className='grid'>
          <ul>
            {props.users.map(user => {
              return (
                <li className='listItem' key={user.id}>
                  <Link href={'/users/' + user.id} as={'/users/' + user.id}>
                    <a>
                      <h2>{user.handle}</h2>
                      <img className='image' src={user.img} alt='a user' />
                      <p>{user.price} €</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};
export default UsersPage;

export async function getServerSideProps(context) {
  const { getUsers } = await import('../../db');
  const users = await getUsers();
  console.log('users', users);
  // console.log(products);
  // console.log('context', context);
  if (users === undefined) {
    return { props: {} };
  }

  return {
    props: {
      users,
    },
  };
}
