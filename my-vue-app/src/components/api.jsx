import axios from 'axios';

export let backEndPoint = "https://qtify-backend-labs.crio.do";

export let fetchTopAlbum = async () => {
    try {
        
        let res = await axios.get(`${backEndPoint}/albums/top`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export let fetchNewAlbum = async () => {
    try {
        
        let res = await axios.get(`${backEndPoint}/albums/new`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export let fetchSongs = async () => {
    try {
        
        let res = await axios.get(`${backEndPoint}/songs`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export let fetchFilters = async () => {
    try {
        
        let res = await axios.get(`${backEndPoint}/genres`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}