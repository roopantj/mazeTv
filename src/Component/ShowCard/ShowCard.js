import {CardImg, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import nopreview from '../nopreview2.jpg';
const ShowCard = ({id, img, name, rating, genres}) =>{
    return(
      <Card>
          <CardImg top style={{height:"20rem",background:"black"}}  src={img?img:nopreview}/>
          <OverLay>
          <CardBody style={{background:"#424040"}}>
            <Title>{name}</Title>
            <Rating>{rating}</Rating>
            <Genre>{ Array.isArray(genres) && genres.length > 1 ? genres.join(' . ') : genres}</Genre>
          </CardBody>
          <div style={{background:"#424040"}}>
            <Link to={`/${id}`}><Button>Know More</Button></Link>
          </div>
          </OverLay>
      </Card>
   )
}

const Button = styled.button`
    height: 3rem;
    width: 100%;
    background: red;
    border: none;
    text-align: center;
    position: relative;
    top: -1.5rem;
    color: white;
    @media (max-width:424px){
        top:0;   
    }
`
const OverLay = styled.div`
    width: 100%;
    border: none;
    position: relative;
    top:0rem;
    z-index:2;
`
const Card = styled.div`
    height: 20rem;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border:none;
    border-radius: 1rem;
    @media (min-width:425px){
        &:hover{
            transition: 0.7s ease;
            border-radius: 3rem;
            transform: scale(1.1);
            z-index: 1;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }
        &:hover ${OverLay}{
            transition: 0.7s ease;
            top: -10rem;
        }
    }
    @media (max-width:424px){
        height:30rem;
        ${OverLay}{
            top: -1.5rem;
        }
    }
`
const Title = styled.div`
    font-size: calc(1.275rem + .3vw);
    font-weight: 500;
    line-height: 1.2;
    height: 2rem;
` 
const Rating = styled.h6`
    color:#6c757d;
    height: 1rem;
    margin-top: -0.25rem;
`
const Genre = styled.p`
    height: 2.5rem;
    font-weight: 400;
`

export default ShowCard;