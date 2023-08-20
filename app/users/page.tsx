import React from 'react';
import type { Metadata } from 'next';
import { fetchUsers } from '@/lib/fetchUsers';
import { User } from '@/types';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users page',
  keywords: 'users, page, app',
};

const Users = async () => {
  const UserData: Promise<User[]> = fetchUsers();

  const User: User[] = await UserData;

  console.log('🚀 ~ file: page.tsx:14 ~ Users ~ User:', User);

  return (
    <div>
      <Link href="/">
        <h1 className="underline text-blue-500 font-semibold p-2">
          Back to home
        </h1>
      </Link>

      {User.map(user => (
        <p key={user.id} className="p-1">
          <Link href={`/users/${user.username}`}>{user.username}</Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
