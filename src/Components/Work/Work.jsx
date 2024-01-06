import { useState } from "react";
// import Button from "../Button/Button";
// import Content from "../Content/Content";
export default function Work() {
    let [toggleState, setToggleState] = useState(1);
    function toggleTab(index){
        setToggleState(index);
    }
  return (
    <section className="work">
      <div className="container work__container">
        <div className="work__btns">
          <button className={toggleState === 1 ? "work__btn work__btn--active" : "work__btn"} onClick={() => toggleTab(1)}>РОССИЯ</button>
          <button className={toggleState === 2 ? "work__btn work__btn--active" : "work__btn"} onClick={() => toggleTab(2)}>США</button>
          <button className={toggleState === 3 ? "work__btn work__btn--active" : "work__btn"} onClick={() => toggleTab(3)}>КИТАЙ</button>
        </div>

        <div className="work__contents">
          <p className={toggleState === 1 ? "work__content work__content--active" : "work__content"}>РОССИЯ - САМАЯ БОЛЬШАЯ СТРАНА</p>
          <p className={toggleState === 2 ? "work__content work__content--active" : "work__content"}>США - САМАЯ БОГАТАЯ СТРАНА</p>
          <p className={toggleState === 3 ? "work__content work__content--active" : "work__content"}>КИТАЙ - САМАЯ НАСЕЛЕННАЯ СТРАНА</p>
        </div>
      </div>
    </section>
  );
}
