import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const [imgLink, imgLinkName] = useState("");

  const updateValue = (e) => {
    if (e.target.name === "movieName") {
      setMovieName(e.target.value);
    } else if (e.target.name === "imgLink") {
      imgLinkName(e.target.value);
    }
  };

  const submitMovie = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/movies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movieName,
        imgLink: imgLink,
      }),
    });
    if (response.status === 200) {
      window.location.href = "/";
    } else {
      console.log(response);
      alert("Something went wrong");
    }
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
      <div className="grid place-items-center mt-48">
        <form className="space-y-6" action="#">
          <div className="p-4 max-w-sm bg-white rounded-lg  shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Add movie
            </h5>
            <div>
              <label
                for="movieName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="movieName"
                id="movieName"
                value={movieName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Movie name"
                onChange={updateValue}
                required
              />
            </div>
            <div>
              <label
                for="imgLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Banner Link
              </label>
              <input
                type="text"
                name="imgLink"
                id="imgLink"
                value={imgLink}
                onChange={updateValue}
                placeholder="Banner Link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="button"
              className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              onClick={submitMovie}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
