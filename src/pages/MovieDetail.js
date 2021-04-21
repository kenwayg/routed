import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MovieDetail = ({ film, setFilm }) => {
  const history = useHistory();
  const url = history.location.pathname;

  console.log(url);

  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = film.filter((stateFil) => stateFil.url === url);
    setMovie(currentMovie[0]);
  }, [url, film]);
  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.name}</h2>
            <img src={movie.image} alt="movie" />
          </HeadLine>
          <Revs>
            {movie.review.map((rev) => (
              <Review title={rev.title} revs={rev.revs} />
            ))}
          </Revs>
          <SecImg>
            <img src={movie.image2} alt="mov2" />
          </SecImg>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Revs = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10px;
  align-items: center;
  justify-content: space-around;
`;
const RevStyle = styled.div`
  padding: 2rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const SecImg = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
  }
`;
///REVIEW COMPONENT

const Review = ({ title, revs }) => {
  return (
    <RevStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{revs}</p>
    </RevStyle>
  );
};
export default MovieDetail;
