import axios from 'axios';
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
//const secretKey = process.env.REACT_APP_UNSPLASH_SECRET_KEY
const rootUrl = "https://api.unsplash.com";

export default axios.create({
  baseURL: rootUrl,
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
})

