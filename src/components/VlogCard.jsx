import "./vlogdesign.css";

export default function VlogCard({ vlog }) {
  return (
    <div className="vlog-card">
      <div className="video-wrapper">
        <iframe
          src={vlog.url}
          title={vlog.title}
          allowFullScreen
        ></iframe>
      </div>
      <h3>{vlog.title}</h3>
      <p>{vlog.description}</p>
    </div>
  );
}
