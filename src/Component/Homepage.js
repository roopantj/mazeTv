import ShowCard from "./ShowCard";
import './Homepage.css';
const Homepage = ({shows}) =>{
   return(
      <div className="show-container">
           {
               shows.map( tvShow => <ShowCard
                key={tvShow.show.id} 
                id={tvShow.show.id}
                img={tvShow.show.image?.original}
                name={tvShow.show.name}
                rating={tvShow.show.rating?.average}
                genres={tvShow.show.genres}/>)
           }
      </div>
   )
}

export default Homepage;