import React, { useEffect, useState } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import nopreview from '../../nopreview2.jpg';
import './ShowDetails.css'; 

const ShowDetails = ({shows}) =>{
    const params = useParams();
    const history = useHistory();
    const [showDetails,setShowDetails] = useState();
    const [error, setError] = useState(false);
    const getShowDetails = () =>{
        console.log(params.id);
        if(shows.length){
        console.log("In if")
        console.log(shows)    
        const details = shows.filter(show=>(show.show.id===parseInt(params.id))) 
        if(details)
          setShowDetails(details[0])
        else
          setError(true)  
        }
        else
        history.push('/');
    }
    useEffect(()=>{
       getShowDetails()
    },[])
    return(
        <DetailsCard>
            { !error  ?
            <React.Fragment>
            <div className="image">
              <img src={showDetails?.show.image? showDetails?.show?.image.original:nopreview} alt={showDetails?.show.name}></img>
            </div> 
            <div className="show-details">
              <h2>{showDetails?.show.name}</h2>
              <p>Language: {showDetails?.show.language}</p>
              <p>Status: {showDetails?.show.status}</p>
              <p>Summary</p>
              {showDetails?.show.summary}
              {showDetails?.show.officialSite ? <Link href={showDetails?.show.officialSite}></Link> : null}
              <Link to='/'><Button color="warning">Go back</Button></Link>
            </div> 
            </React.Fragment>
             :
             <h2>No page found !!</h2>
             }
        </DetailsCard>
    )
}

const  DetailsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding:1rem;
    color: white;
    @media (min-width:768px){
        width:90%;
        text-align: left;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        padding: 1rem;
        margin: 1rem auto;
        color: white;
        background: #424040;
        flex-direction: row-reverse;
    }
`

export default ShowDetails;

