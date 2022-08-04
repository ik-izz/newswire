import React from "react";
import "./Header.css";
import img_1 from "./trend/img_1.jpeg";
import img_2 from "./trend/img-2.jpeg";
import img_3 from "./trend/img-3.jpeg";
import img_4 from "./trend/img-4.jpeg";

function Header() {
  return (
    <div className="header-1">
      <div className="top-trend">
        <div
          className="news-1 size text  "
          style={{ backgroundImage: `url(${img_1})` }}
        >
          <div className="push">
            <p className="tag">Immigration</p>
            <h6>Doubling down on a dubious legal manoeuvre</h6>
            <p> Vngle Feb 22</p>
          </div>
        </div>
      </div>
      <div className="trend">
        <div
          className="news-2  size text  "
          style={{ backgroundImage: `url(${img_2})` }}
        >
          <div className="push">
          <p className="tag">politics</p>
            <h6>
              Almist single-handledly, Joe Manchin has scuttled Joe Biden's
              plans
            </h6>
            <p> Vngle Feb 22</p>
          </div>
        </div>

        <div className="trend-2">
          <div
            className="news-3  size text  "
            style={{ backgroundImage: `url(${img_3})` }}
          >
            <div className="push">
            <p className="tag">politics</p>
              <h6>
                Temporary problem risk permanently putting many passengers off
              </h6>
              <p> Vngle Feb 22</p>
            </div>
          </div>
          <div
            className="news-4 size text  "
            style={{ backgroundImage: `url(${img_4})` }}
          >
            <div className="push">
            <p className="tag">politics</p>
              <h6>But its has not blocked his return to the White House</h6>
              <p> Vngle Feb 22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;