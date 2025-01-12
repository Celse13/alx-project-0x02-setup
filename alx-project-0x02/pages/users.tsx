import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

export default function Users({ users }: { users: UserProps[] }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        users: [],
      },
    };
  }
}
