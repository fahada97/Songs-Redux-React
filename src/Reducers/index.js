import {combineReducers} from "redux";

const songsReducer = () =>{
    return[
        {title: 'No Scrubs', duration: '5:00'},
        {title: 'Macarena', duration: '4:00'},
        {title: 'All Stars', duration: '3:00'},
        {title: 'I want it that way', duration: '2:00'}
    ];
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});