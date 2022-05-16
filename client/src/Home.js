import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// react search
function Home() {
  var response = [];
  const [movies, setMovies] = useState([
    {
      _id: "6280b7f1290dd91c7c1c1c23",
      title: "Doctor Strange",
      imgLink: "abcdefg",
      __v: 0,
    },
  ]);

  async function fetchData() {
    response = await axios.get(`http://localhost:5000/movies/`);

    var data = response.data;
    setMovies(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filterMovies = (e) => {
    const text = e.target.value.toLowerCase();
    if (text === "" || text === " " || text == null) {
      fetchData();
    }
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(text);
    });
    setMovies(filteredMovies);
  };
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="pl-8 text-xl mb-16">
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              TMDB
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/movies/add"
              className="text-blue-500 hover:text-blue-800"
            >
              Add a movie
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="w-full mb-48 grid place-items-center ">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            className="w-1/3 py-2 border-b-2 border-green-600 outline-none focus:border-blue-400"
            // filter movies
            onChange={filterMovies}
          />
        </div>
      </div>
      <div className="mt-16 gap-8 ml-16 grid grid-cols-3 ">
        {movies.map((movie) => (
          <div key={movie._id} className="">
            <div className=" max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={movie.imgLink} alt="Movie Poster" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
