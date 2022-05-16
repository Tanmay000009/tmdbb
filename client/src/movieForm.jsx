import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieForm() {
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
        <div className="p-4 max-w-sm bg-white rounded-lg  shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Add movie
            </h5>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Movie name"
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
                placeholder="Banner Link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MovieForm;
