import { IEvent } from "../typings/i-event";

const eventDb: IEvent[] = [
    {
        id: 1,
        ownerId: 1,
        name: "Teszt event 1",
        location: "Mindenhol",
        from: new Date(),
        to: new Date(),
        comment: "",
        participants: [2],
    },
];

export default eventDb;
