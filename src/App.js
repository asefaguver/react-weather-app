import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import City from "./City";

function App() {
  const key = "7f5134167c4c30cccc69ee7264eb1198";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  console.log(search);
  return (
    <div className="App">
      <div>
        <div>
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Şehir Adı Girin" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600" />
          {city && <City city={city} />}
        </div>
        
      </div>
    </div>
  );
}

export default App;
