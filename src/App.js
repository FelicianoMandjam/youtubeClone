import { Component } from "react";
import SearchBar from "./components/searchBar";
import youtube from "./API's/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";
import "./styles.css"


class App extends Component {
  
  state = { 
    videos:[],
    selectedVideo: null
  } 


  componentDidMount(){
  this.onTermSubmit("Feliciano WRKT")
  }


  onTermSubmit = async term =>{


   const reponse = await youtube.get('/search' , {
      params: {
        q: term,
      }
    })


    console.log(reponse);


    this.setState({
      videos: reponse.data.items,
      selectedVideo: reponse.data.items[0]
    })   //Cella me permet de récupérer les infirmation dans le state this.setState(changer)(cheminV.chemin.chemin)
  }



  onVideoSelect = video =>{
    // console.log("depuis app",video);
    this.setState({selectedVideo: video})
  }



  render(){
    return (
      <div className="container">
        <div className="Logo"> <img className="logoImg" src="./Assets/Logo-Youtube.png" alt="" /> <h2 className="text-danger">Ou Presque!</h2></div>
        <SearchBar onForSubmit={this.onTermSubmit}/>
       
       <div className="row">
          <div className="col-8">
          <VideoDetail video={this.state.selectedVideo}/>
          </div>

          <div className="col-4">
          <VideoList 
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
              /> 
          </div>

       </div>


      </div>
    );
  }
  }
  // Pour communiquer entre perents(APP) et les enfants on utilise les PROPS={}

export default App;
