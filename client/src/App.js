import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// react search
function App() {
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
    <div>
      <div>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            className="w-1/3 ml-96 py-2 border-b-2 border-green-600 outline-none focus:border-blue-400"
            // filter movies
            onChange={filterMovies}
          />
        </div>
      </div>
      <div className="mt-16 gap-8 ml-16 grid grid-cols-3 ">
        {movies.map((movie) => (
          <div key={movie._id} className="">
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
