import React,{ useEffect , useRef, useState} from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom';



  const Titlecards = ({title,category}) => {

    const[apiData,setApiData] = useState([]);
    const cardsRef = useRef();



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2JlOGQ1OTRiMjMwMTViYWJhNTAyZDI5MzY3NDMwZiIsIm5iZiI6MTcyMTA5OTU4Ny42MzQ4NjUsInN1YiI6IjY2OTVlMjYwODIzZjk4MWZmMGZkOGRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cm1v267AuUGozcksmlF3zjcuu5ILZUM7nTcSdAMCbjA'
    }
  };
  


  const handlewheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlewheel);
  },[])

  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) => {
            return <Link to={`/player/${card.id}`}className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  );
}

export default Titlecards