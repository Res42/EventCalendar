import { IParticipation } from "../typings/i-participation";
import { ParticipationState } from "../enumerations";


const participationDb: IParticipation[] = [
    {
        eventId: 1,
        userId: 2,
        state: ParticipationState.Yes,
    },
];

export default participationDb;
