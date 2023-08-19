import {UserType} from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
    debugger// need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            return action.payload === 'up' ? copyState : copyState.reverse();

        }
        case 'check': {
            return state.filter(el => el.age >= action.payload); // need to fix
        }
        default:
            return state;
    }
};
