import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// react search
function App() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/`, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        setAPIData(response.data).error((error) => {
          console.log(error);
        });
        console.log(response.data);
      });
  }, []);
  return (
    <div class="flex justify-center">
      <div class="w-full">
        <input
          type="text"
          name="name"
          placeholder="Search..."
          class="w-1/3 ml-96 py-2 border-b-2 border-green-600 outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
}

export default App;
