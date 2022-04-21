// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlist: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
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
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
            
        default:
            return state;
    }
}

export default reducer;