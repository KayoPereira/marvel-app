import { Route, Routes } from "react-router-dom";
// import md5 from "js-md5";
import Nav from "./components/Nav/Nav.jsx";
import Characters from "./components/Characters/Characters.jsx";
import CharacterComics from "./components/CharacterComics/CharacterComics.jsx";
import Comics from "./components/Comics/Comics";
// import Creators from "./components/Creators/Creators.jsx";
import Events from "./components/Events/Events.jsx";
// import Series from "./components/Series/Series.jsx";
import Stories from "./components/Stories/Stories.jsx";
import "./App.css";
import CharacterEvents from "./components/CharacterEvents/CharacterEvents.jsx";
import Aside from "./components/AsideMenu/Aside.jsx";
import FavouriteCharacters from "./components/FavouriteCharacters/FavouriteCharacters.jsx";
import FavouriteComics from "./components/FavouriteComics/FavouriteComics.jsx";
import { useState } from "react";

function App() {
  const savedTheme = localStorage.getItem("theme") || "Light";
  const [theme, setTheme] = useState(savedTheme);

  return (
    <div className="App" style={{backgroundColor: theme === 'Light' ? '#F0F0F0' : '#000', minHeight: '955px'}}>
      <Nav />
      <Aside theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/series" element={<Series />} /> */}
        {/* <Route path="/stories" element={<Stories />} /> */}
        <Route
          path="/characters/favourites"
          element={<FavouriteCharacters />}
        />
        <Route path="/comics/favourites" element={<FavouriteComics />} />
        <Route path="/character/:name/comics" element={<CharacterComics />} />
        <Route path="/character/:name/events" element={<CharacterEvents />} />
      </Routes>
    </div>
  );
}

export default App;
