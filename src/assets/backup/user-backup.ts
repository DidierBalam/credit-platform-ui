import { UserType } from '@/shared/types/user-type';

const users: UserType[] = [
  {
    userId: 1,
    username: 'didierbalam',
    password: '123',
    type: 'user',
    isActive: true,
    create: new Date('March 10, 2021 11:13:00'),
  },
  {
    userId: 2,
    username: 'root',
    password: '123',
    type: 'admin',
    isActive: true,
    create: new Date('January 20, 2021 11:13:00'),
  },
  {
    userId: 3,
    username: 'joseb',
    password: '312',
    type: 'user',
    isActive: false,
    create: new Date('September 5, 2021 11:13:00'),
  },
];

export { users };
