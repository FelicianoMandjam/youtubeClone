import './VideoItem.css'

const VideoItem = ({video, onVideoSelect})=>{

    return (
        <div onClick= { ()=>{onVideoSelect(video)}}
        className="myVideoCss list-group-item"

        >

           <img 
         src={video.snippet.thumbnails.medium.url} 
         className="img-thumbnail mr-2 " 
         alt=""/>

         <p>{video.snippet.title} </p>
        </div>
    )
}

export default VideoItem;