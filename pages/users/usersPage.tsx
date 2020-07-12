import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// todo query apolloserver

type Users = {
  id: number;
  confirmed: boolean;
  email: string;
  firstName: string;
  handle: string;
  isActive: boolean;
  lastName: string;
  mainGame: string;
  role: string;
  sideGames: string;
};

type Props = { users: Users[] };

const UsersPage = (props: Props) => {
  console.log('props', props.users);
  // const users = props.users ? props.users : [];
  return (
    <div>
      <Head>
        <title>usersPage</title>
        <link rel='icon' href='/vdv-logo' />
      </Head>

      <main>
        <div>
          <p>
            <code>vdv</code>
          </p>
        </div>

        <div>
          <ul>
            {props.users.map(user => {
              return (
                <li key={user.id}>
                  <Link href={'/users/' + user.id} as={'/users/' + user.id}>
                    <a>
                      <h2>{user.handle}</h2>
                      {/* <img className='image' src={user.img} alt='a user' /> */}
                      <p>{user.mainGame} €</p>
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
  // console.log(context);
  const { getUsers } = await import('../../db');
  const users = await getUsers();
  // todo map over users (unix time)..convert date to unix time, maybe milliseconds
  const unixTimeStamp = users.map(({ created_at, updated_at, ...users }) => {
    const date = new Date('2020.07.12').getTime() / 1000;
    console.log('unixTimeStamp');
    return users;
  });
  console.log('users', users);
  // console.log(products);
  // console.log('context', context);
  if (users === undefined) {
    return { props: {} };
  }

  return {
    props: {
      users: users.map(({ created_at, updated_at, ...rest }) => {
        return rest;
      }),
    },
  };
}
