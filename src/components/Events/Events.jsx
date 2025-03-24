import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../redux/action_creators";
import Event from "../Event/Event";
import s from "./Events.module.css";
import { useTranslation } from "react-i18next";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  if (!events.length) dispatch(getEvents("a"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getEvents(input));
    setInput("");
    document.querySelector("input").blur();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)} style={{paddingTop: '20px'}}>
        <input
          className={s.eventInput}
          type="text"
          placeholder={t('search_by_first_letters')}
          value={input}
          onChange={(e) => handleInput(e)}
        />
        {/* <input type="submit" className={s.inputIcon} value="🔍" /> */}
      </form>
      <div className={s.cardsContainer}>
        {events &&
          events.map((event) => {
            return (
              <Event
                key={event.id}
                title={event.title}
                creators={event.creators}
                description={event.description}
                comics={event.comics}
                characters={event.characters}
                poster={`${event.thumbnail.path}.${event.thumbnail.extension}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Events;
