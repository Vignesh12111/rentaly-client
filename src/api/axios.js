import axios from "axios";

const baseURL = process.env.BACKEND_API || "https://api-rentaly.onrender.com/api/";
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

let instance = axios.create({
    baseURL
})
instance.defaults.headers.common['x-user-timezone'] = timeZone;

export default instance
