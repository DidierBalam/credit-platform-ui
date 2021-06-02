import { UserType } from '@/shared/types/user-type';

const users: UserType[] = [
  {
    userId: 1,
    username: 'DidierBalam',
    password: '123',
    type: 'user',
    isActive: false,
    create: new Date('March 10, 2021 11:13:00'),
  },
  {
    userId: 2,
    username: 'JehieliTamayo',
    password: '321',
    type: 'user',
    isActive: true,
    create: new Date('January 20, 2021 11:13:00'),
  },
  {
    userId: 3,
    username: 'RogerAguilar',
    password: '312',
    type: 'user',
    isActive: true,
    create: new Date('September 5, 2021 11:13:00'),
  },
];

export { users };
