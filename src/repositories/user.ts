import { IUser } from "../typings/i-user";


const userDb: IUser[] = [
    {
        id: 1,
        username: "kutya",
        displayName: "kutya",
        emailAddress: "kutya@kutya.kutya",
        eventsIds: [1],
        participationIds: [],
        password: "kutya",
        passwordResetToken: null,
    },
    {
        id: 2,
        username: "kutya2",
        displayName: "kutya2",
        emailAddress: "kutya2@kutya.kutya",
        eventsIds: [],
        participationIds: [1],
        password: "kutya2",
        passwordResetToken: null,
    },
];

export default userDb;
