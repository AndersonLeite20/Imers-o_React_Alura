import config from '../config.json'
import styled from 'styled-Components';
import {CSSReset} from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import StyledTimeline from '../src/components/TimeLine'

function HomePage(){
   const estiloDaHomePage = {
      // barckground-color:red;
   }
   return (
      <>
         <CSSReset>
            <div style={estiloDaHomePage}>
               <div>
                  <Menu/>
                  <Header/>
                  <Taimeline playlists={config.playlists}>
                     comteudo
                  </Taimeline>
               </div>
            </div>
         </CSSReset>
      </>
   ) 
   
}

  
export default HomePage
/*
function Menu(){
   return(
      <div>
         menu
      </div>
   )
}*/

const styledHeader = styled.div`
   img{
      width:80px;
      height:80px;
      border-radius:50%;
   }
   .user-info{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap:16px;
   }
`;
function Header(){
   return(
      <styledHeader>
         {/*<img src="banner"/>*/}
         <section className='user-info'>
               <img src={`https://github.com/${config.github}.png`}/>
            <div>
               <h2>{config.nome}</h2>
               <p>{config.job}</p>
            </div>
         </section>
      </styledHeader>
   )
}
function Taimeline(props){
   const playlistNames = Object.keys(props.playlists)
   return(
      //statement
      //retorno por expressão
      <StyledTimeline>
         {playlistNames.map((playlistNames)=>{
            const videos = props.playlists[playlistNames];
            return (
               <section>
                  <h2>{playlistNames}</h2>
                     <div>
                        { videos.map((videos)=>{
                        <a href={videos.url}>
                           <img src={videos.thumb}/>
                           <span>
                              {videos.title}
                           </span>
                        </a>
                     })}
                  </div>
               </section>
            )
         })}
      </StyledTimeline>
   )
}