import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// react search
function App() {
  const [movies, setMovies] = useState([
    {
      _id: "6280b7f1290dd91c7c1c1c23",
      title: "Doctor Strange",
      imgLink: "abcdefg",
      __v: 0,
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:5000/movies/`, {
          "Content-Type": "application/json",
        })
        .then((response) => {
          console.log(response.data);
          var data = response.data;
          setMovies(data);
          console.log(movies);
          console.log(data[0]);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      {movies.map((movie) => (
        <div key={movie._id}>{movie.name}</div>
      ))}
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Search..."
          className="w-1/3 ml-96 py-2 border-b-2 border-green-600 outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
}

export default App;
