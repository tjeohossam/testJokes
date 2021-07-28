import { useDispatch, useSelector } from "react-redux";
import { addSingleJoke, deleteJokes, listJokes } from "../actions/jokeActions";
import Loader from "../components/Loader";
import Joke from "../components/Joke";
import { removeDuplicates } from "../utils";
import { useState } from "react";

const HomeScreen = () => {
  const [category, setCategory] = useState("Tous");
  const dispatch = useDispatch();

  const jokeList = useSelector((state) => state.Jokes);
  const { jokes, loading } = jokeList;
  const addJoke = () => {
    dispatch(addSingleJoke());
  };
  const addTenJokes = () => {
    dispatch(listJokes());
  };

  const deleteAllJokes = () => {
    dispatch(deleteJokes());
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <button className="success" onClick={addJoke}>
        Ajouter blague
      </button>
      <button className="primary" onClick={addTenJokes}>
        Ajouter 10 blagues
      </button>
      <button className="danger" onClick={deleteAllJokes}>
        Réinitialiser
      </button>
      {jokes.length > 0 && (
        <select onChange={onChangeCategory} value={category}>
          <option value="Tous">Tous</option>
          {Array.from(new Set(jokes.map((obj) => obj.type))).map(
            (type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            }
          )}
        </select>
      )}

      <br />
      {loading ? (
        <Loader />
      ) : Array.isArray(jokes) && jokes.length > 0 ? (
        <>
          Il y a <strong>{removeDuplicates(jokes).length}</strong> blagues
          {removeDuplicates(jokes).map((joke) => {
            if (joke.type === category || category === "Tous")
              return <Joke joke={joke} key={joke.id} />;
          })}
        </>
      ) : (
        <div>Vous n'avez pas de blagues</div>
      )}
    </div>
  );
};

export default HomeScreen;
