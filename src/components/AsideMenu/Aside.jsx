import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";
import { useEffect } from "react";

const Aside = ({theme, setTheme}) => {
  const h1Style = {
    color: theme === 'Light' ? '#000' : '#FFF',
  };
  
  const themeToChange = theme === 'Light' ? 'Dark' : 'Light'
  const toggleTheme = () => {
    setTheme(themeToChange);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <aside>
      <ul className={s.asideMenu}>
        <NavLink className={s.link} to="/characters/favourites">
          <li style={h1Style}>Favourite characters</li>
        </NavLink>
        <NavLink className={s.link} to="/comics/favourites">
          <li style={h1Style}>Favourite comics</li>
        </NavLink>
        <NavLink className={s.link} onClick={toggleTheme} style={{textAlign: 'left'}}>
          <li style={h1Style}>Switch to {themeToChange}</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Aside;
