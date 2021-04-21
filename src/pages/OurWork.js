import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const OurWork = ({ film }) => {
  return (
    <Work>
      {film.map((fl) => (
        <Movie>
          <h2>{fl.name}</h2>
          <div className="line"></div>
          <Link to={fl.url}>
            <img src={fl.image} alt="" />
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
