import React from 'react';
import { User } from '@/types';
import { fetchUser } from '@/lib/fetchUser';

const User = async (param: { userId: string }) => {
  const userData: Promise<User> = fetchUser(param.userId);

  const user: User = await userData;

  return <div>User</div>;
};

export default User;
