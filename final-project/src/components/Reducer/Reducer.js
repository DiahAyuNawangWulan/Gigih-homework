export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQCbM3wLHqDVvxdGp8eCARcbh3v5VmY9ef-lodqIagryvvmg06hUFlXbL5KT9OeOKa-B-e7YFXG0hIGWieTccJTXOg5WMnRrrLgPniZxeohC-KNtmElDQoOhsLbGe-Rdwc4ybDRwYzC9ooFwqFXqUQWEX7oqEnx72mI',
};

const reducer = (state, action) => {
    console.log (action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }
}

export default reducer;