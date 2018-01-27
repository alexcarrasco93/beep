import { User } from "../../models/user/user.interface";

const userList: User[] = [
    {
        firstName: 'Alex',
        lastName: 'Carrasco Salvador',
        email: 'alexcarrascosalvador@gmail.com',
        avatar: 'assets/img/avatar.png'
    },
    {
        firstName: 'Arantxa',
        lastName: 'Carrasco Salvador',
        email: 'arantxacarrascos@gmail.com',
        avatar: 'assets/img/avatar.png'
    },
    {
        firstName: 'José Luis',
        lastName: 'Pérez Arroyo',
        email: 'jlprzarroyo@gmail.com',
        avatar: 'assets/img/avatar.png'
    }
];

export const USER_LIST = userList;