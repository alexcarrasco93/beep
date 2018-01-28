import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
    {
        firstName: 'Alex',
        lastName: 'Carrasco Salvador',
        email: 'alexcarrascosalvador@gmail.com',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Arantxa',
        lastName: 'Carrasco Salvador',
        email: 'arantxacarrascos@gmail.com',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'José Luis',
        lastName: 'Pérez Arroyo',
        email: 'jlprzarroyo@gmail.com',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    }
];

export const USER_LIST = userList;