import {
    SET_ALBUMS,
    ADD_ALBUMS,
    SET_ARTISTS,
    ADD_ARTISTS
} from '../utils/constants'
import {get} from '../utils/api'

export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
});
export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
});
export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
});
export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
});

export const getResult = (searchTerm) => {
    return async (dispatch) => {
        try {
            console.log('reach')
            const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
                searchTerm
            )}&type=album,artist`;
            const result = await get(API_URL);
            console.log(result)
            const { albums, artists } = result;
            dispatch(setAlbums(albums));
            dispatch(setArtists(artists));
        } catch (err) {
            console.log('error', err)
        }
    };
};