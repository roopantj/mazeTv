import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Component/Homepage';
import ShowDetails from './Component/ShowDetails';
import Header from './Component/Header';

const App = () => { 
  const [tvShows,setTVShows] = useState([])
  const [loader,setLoader] = useState(false)
  const fetchTVshows = async() =>{
    try{
       setLoader(true)
       const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
       const data = await response.json();
       setTVShows(data);
       setLoader(false)
    }catch(e){   
       setLoader(false) 
       window.alert("Error fetching ",e);
    }
  }
  useEffect(()=>{
    fetchTVshows()
  },[]) 
  return (
    <div className="App">
        <Header/>
        {
          loader && !tvShows ?
          <h2>Loading</h2> :
          <Switch>
             <Route path="/:id">
                <ShowDetails shows={tvShows}/>
             </Route>
             <Route path="/">
                <Homepage shows={tvShows}/>
             </Route>
          </Switch>
        }    
    </div>
  );
}

export default App;
