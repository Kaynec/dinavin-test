import React from "react";
//  search icons imported from react icons library  //

import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";

import { CgSearch } from "react-icons/cg";

export default function Hero() {
  // using state to hold the input value
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      {/* div that acts as the input parent */}
      <div className="input">
        <i>
          <CgSearch />
        </i>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button> جستجو</button>
      </div>
      {/* the text above container parent */}
      <div className="topOfCards">
        <h4> ISUZU npr </h4>
        <h4> انتخاب خودرو </h4>
      </div>

      <div className="container">
        <div className="card">
          <figure>
            <img src={img0} alt="" />

            <figcaption>موتور , سیستم سوخت , برق</figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img1} alt="" />

            <figcaption> سیستم خنک کننده و باک , هواکش </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img2} alt="" />

            <figcaption> کلاچ , گیربکس , بوستر ترمز </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img3} alt="" />

            <figcaption>بدنه , شیشه , سینی جلو </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img4} alt="" />

            <figcaption>سگدست جلو ، فرمان ، محور تعلیق </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img5} alt="" />

            <figcaption>شاسی ، تورجن بار ، جا باطری </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img6} alt="" />

            <figcaption> بدنه ، شیشه ، سینی جلو </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img7} alt="" />

            <figcaption> اصلاح داخلي، برچسب ها، نشانه</figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img8} alt="" />
            کانال هوا بخاری ، بخاری کامل
            <figcaption> </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure>
            <img src={img9} alt="" />

            <figcaption> ابزار </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
