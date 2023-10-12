import React from "react";
import "../components/News.css";
import data from "./data.json";
import { Link } from "react-router-dom";





const News = () => {
  return (
    <div className="main-body">
      <div className="top-header">
        <select className="selected" defaultValue="apple">
          <option value="apple">Resmi ilan</option>
          <option value="banana">Haberler</option>
          <option value="orange">Foto Galeri</option>
          <option value="banana">Video Galeri</option>
          <option value="orange">Köşe Yazısı</option>
        </select>

        <select className="selected" defaultValue="orange">
          <option value="apple">Bugün</option>
          <option value="banana">Dün</option>
          <option value="orange">Son 7 Gün</option>
          <option value="banana">Son 30 Gün</option>
          <option value="banana">Son 60 Gün</option>
        </select>

        <input className="input" defaultValue="Ara"></input>

        <button className="search-button">🔍</button>
        <button className="secim-button">❌</button>
      </div>

      <Link to="/Newsinside" className="link">

        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="img-card">
              <img className="img-inside" src={item.image} alt="123"></img>
            </div>

            <div className="header-text">
              <h3>{item.title} </h3>
              <p className="description">
                {item.description.substring(0, 200)}
              </p>
              <p>{item.publishedDate}</p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default News;
