import axios from "axios";

// const KEY = "AIzaSyDFK1hHiVHIZnilAFNCVjs997aKQj7tYxE"; 
 const KEY = "AIzaSyBIJzEYxK1CROPp6vjJZapf4Cy19Xarshw";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key : KEY
    }
})