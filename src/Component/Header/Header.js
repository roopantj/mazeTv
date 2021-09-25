import styled from "styled-components";
import {Link} from 'react-router-dom'; 
const Header = () =>{
    return(
        <Head><Link to='/' style={{textDecoration:"none",color:"red"}}><h2 style={{cursor:"pointer"}}>TV Maze</h2></Link></Head>
    )
}

const Head = styled.div`
    text-align: center;
    color: red;
    z-index: 200;
    position: sticky;
    top:0;
    padding: 0.5rem;  
    width: 100%;
    background: white;

`
export default Header;