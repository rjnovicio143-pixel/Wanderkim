// src/pages/Vlogs.jsx
import { useState } from "react";
import VlogCard from "../components/VlogCard";
import "./Vlogs.css";
import vlogsData from '../data/vlogsDatas';
import Footer from "../components/Footer";

export default function Vlogs() {
  const [filter, setFilter] = useState("all");
  const filteredVlogs =
    filter === "all" ? vlogsData : vlogsData.filter(vlog => vlog.tag === filter);

  return (
    <div className="vlogs-page">
      <h2 className="vlogs-header">Videos</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("Environment")}>Environment</button>
        <button onClick={() => setFilter("travel")}>Travel</button>
        <button onClick={() => setFilter("Foods")}>Foods</button>
      </div>

      <div className="vlog-grid">
        {filteredVlogs.map(vlog => (
          <VlogCard key={vlog.id} vlog={vlog} />
        ))}
      </div>
       <Footer/>
    </div>
  );
}

