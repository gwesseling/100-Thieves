import {playersMock} from "_COMPONENTS/mocks/playersMock";

/**
 * Player hock
 */
export default function usePlayer(id: number) {
    return {
        ...playersMock[id],
    };
}
