import './Home.css';
import VlogCard from '../components/VlogCard';
import vlogsData from '../data/vlogsDatas';
import blogPosts from '../data/blogsDatas';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


function Home() {
  {/*mao ni ang function sa nag unsa na 1 to 3 na id sa data sa vid og sa blog */}
  const featuredVlogs = vlogsData.slice(0, 3);
  const featuredBlogs = blogPosts.slice(0, 4);

  return (
    <div className="home-wrapper">
      <div className="content">
        <h1>Welcome to WanderKim</h1>
        <h2>Journey to the Switzerland</h2>
        <p>Take a deeper journey through Switzerland's hidden gems, rich culture, and breathtaking landscapes.</p>
        <p>All captured in inspiring stories, stunning photographs, and personal travel reflections from passionate explorers.</p>
    
     <Link to="/blogs">
      <button className="hero-button">Explore More</button>
     </Link>
      </div>    

      {/*mao ni anf function sa pag butang sa vid na 3 ra */}

      <div className="home-vlogs-section">
        <h2>Latest YouTube Videos</h2>
        <div className="vlogs-grid">
          {featuredVlogs.map((vlog) => (
            <VlogCard key={vlog.id} vlog={vlog} />
          ))}
        </div>
      </div>

      {/*mao ni anf function sa pag butang sa blog na 3 ra */}

      <div className="home-blogs-section">
        <h2>Latest Blogs</h2>
        <div className="blogs-grid">
          {featuredBlogs.map((post) => (
            <div key={post.id} className="blog-preview">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );

}

export default Home;
