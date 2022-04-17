export const authEndpoint = 'https://account.spotify.com/authorize';

const redirectUri = 'http.//localhost:3000/'
const clientId = '0acfdb6f18ac49be8df0e0ff3856e405'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const LoginUrl = `${authEndpoint}?client.id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`
