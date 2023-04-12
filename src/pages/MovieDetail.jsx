import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=89097dd1c2b88ff9b12abaa6cee67edc`;

  // `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      console.log(response.data);
      setDetail(response.data);
    });
  }, [fetchURL]);

  return (
    <div className="text-white">
      <img src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`} alt=""  className="lg:w-[600px] rounded-lg lg:absolute lg:top-36 lg:right-20 absolute top-32 "/>
      <div className="lg:absolute lg:text-5xl font-extrabold  absolute left-0 top-40 lg:top-36 lg:w-[500px] lg:left-20">
        <h1>{detail.original_title}</h1>
        <p className="text-lg mt-12 text-gray-400">{detail.overview}</p>
        <p className="flex gap-5 lg:text-3xl lg:w-[500px] lg:mt-12">{detail.genres?.map((item)=>{
        return(
          <div className="">
            {item.name}
          </div>
        )
      })}</p>
      <a href={detail.homepage} target="_blank" className="bg-[#dc2626] text-xl px-5 py-2 rounded-full">Watch Now</a>
      </div>
    </div>
  );
};

export default MovieDetail;
