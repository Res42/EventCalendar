import { IUser, IFormattedUser } from "../typings/i-user";

export function formatUser(u: IUser): IFormattedUser {
    return {
        id: u.id,
        name: `${u.displayName} (${u.userName})`,
    };
};
