import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";
import "../pages/app.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {characters.map((character) => (
        <div className="characters" key={character.char_id}>
          <div>{character.name}</div>
          <br />
          <img
            src={character.img}
            alt={character.name}
            className="character_img"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
