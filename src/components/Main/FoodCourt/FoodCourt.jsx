import React from "react";
import "./FoodCourt.css";
import time from "/images/time-eat.png";
import delivery from "/images/delivery.png";
import paris from "/images/paris.png";
import salad from "/images/Photo-plate.png";
import rukkola from "/images/rucola-png.png"
import arrow from "/images/arrow.png"
function FoodCourt() {
  return (
    <section className="foodcourt">
      <div className="container">
        <div className="left">
          <h2 className="title">Your Food court at home</h2>
          <div className="buttons">
            <button className="delivery">
              <p className="infoof">Delivery Order in</p>
            </button>
            <button className="delivery">
              <p className="infoof">Takeout Grab and go</p>
            </button>
          </div>
          <div className="divcha">
            <div className="information">
              <img src={time} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
            <div className="information">
              <img src={delivery} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
            <div className="information">
              <img src={paris} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={salad} alt="" />
          <img className="rukkola" src={rukkola} alt="" />
          <img className="arrow" src={arrow} alt="" />
          <p className="fresh">Fresh salad, Il Pasifigio</p>
        </div>
      </div>
    </section>
  );
}

export default FoodCourt;
