import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Aside = ({theme, setTheme}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <li style={h1Style}>{t("favourite_characters")}</li>
        </NavLink>
        <NavLink className={s.link} to="/comics/favourites">
          <li style={h1Style}>{t("favourite_comics")}</li>
        </NavLink>
        <NavLink className={s.link} onClick={toggleTheme} style={{textAlign: 'left'}}>
          <li style={h1Style}>{t("switch_to")} {t(`${themeToChange.toLowerCase()}`)}</li>
        </NavLink>
        <div style={{display: 'flex'}}>
          <NavLink className={s.link} onClick={() => changeLanguage("pt")} style={{textAlign: 'left', marginRight: '5px'}}>
            <li style={h1Style}>PT</li>
          </NavLink> |
          <NavLink className={s.link} onClick={() => changeLanguage("en")} style={{textAlign: 'left', marginRight: '5px', marginLeft: '5px'}}>
            <li style={h1Style}>EN</li>
          </NavLink> |
          <NavLink className={s.link} onClick={() => changeLanguage("es")} style={{textAlign: 'left', marginLeft: '5px'}}>
            <li style={h1Style}>ES</li>
          </NavLink>
        </div>
      </ul>
    </aside>
  );
};

export default Aside;
