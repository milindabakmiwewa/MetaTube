import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=50`);
  return data;
};
