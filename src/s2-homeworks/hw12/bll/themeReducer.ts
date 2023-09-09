const initState = {
    themeId: 1,
};
type initStateType = typeof initState

export const themeReducer = (state: initStateType = initState, action: ChangeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id};
        }
        default:
            return state;
    }
};

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}); // fix any
type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}