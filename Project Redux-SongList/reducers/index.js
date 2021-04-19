import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title:'Clean', duration: '3:15'},
        {title:'All Too Well', duration: '10:05'},
        {title:'Evermore', duration: '3:06'},

    ];
};

const selectedSongReducer = (selectedSong = null ,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});