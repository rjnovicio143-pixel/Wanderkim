import "./BlogCard.css";

export default function BlogCard({ post }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/default.png";
  };

  return (
    <div className="blog-card">
        <img
        src={post.image}
        alt={post.title}
        className="blog-card-image"
        onError={handleImageError}
         />

        <div className="blog-card-content">
        <h3>{post.title}</h3>

           {/* Handle multiple paragraphs and single paragraph detector*/}

          {Array.isArray(post.content) ? (
           post.content.map((para, index) => (

            <p key={index} className="blog-card-text">
              {para}
            </p>
            ))
           ) : (
            
            <p className="blog-card-text">{post.content}</p>
            )}
      </div>
    </div>
  );
}
