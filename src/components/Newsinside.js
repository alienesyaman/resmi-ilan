import React from "react";
import "./Newsinside.css";
import data2 from "./data2.json";

function Newsinside() {
  return (
    <div className="main-body">
      {data2.map((item) => (
        <div key={item.id}>
          <h2 className="head">{item.title}</h2>
          <div className="advert">
            <div className="advert-number">
              <h3>İlan Numarası</h3>
              <p>{item.advertnumber}</p>
            </div>

            <div className="advert-type">
              <h3>İlan Türü</h3>
              <p>{item.adverttype}</p>
            </div>
          </div>

          <p className="advert-time">İlan Giriş Tarihi: {item.publishedDate}</p>
          <div>{item.Description}</div>

          <div className="bottom-tags">
            <div>#ilangovtr</div>
            <div>Basın No: {item.advertnumber}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Newsinside;
