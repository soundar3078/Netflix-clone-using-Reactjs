import React, { useState , useEffect } from 'react'
import './player.css'
import backarrowicon from '../../assets/back arrow.jpg'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

  const {id} = useParams();

  const navigate=useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2JlOGQ1OTRiMjMwMTViYWJhNTAyZDI5MzY3NDMwZiIsIm5iZiI6MTcyMTA5OTU4Ny42MzQ4NjUsInN1YiI6IjY2OTVlMjYwODIzZjk4MWZmMGZkOGRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cm1v267AuUGozcksmlF3zjcuu5ILZUM7nTcSdAMCbjA'
    }
  };
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  

  return (
    <div className="player">
      <img src={backarrowicon} alt="" onClick={() => {navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="playerinfo">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.typeof}</p>
    </div>
    </div>
  )
}

export default Player