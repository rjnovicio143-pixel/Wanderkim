import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard"; // Component to display individual blog posts
import Footer from "../components/Footer"; // Footer component
import blogPosts from "../data/blogsDatas"; // Sample blog post data
import "./Blogs.css"; // Styling for the Blogs page

export default function Blogs() {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State to hold comments, initialized from localStorage
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("blogComments");
    return saved ? JSON.parse(saved) : [];
  });

  // States for new comment input fields
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  // State to manage replies to comments
  const [replies, setReplies] = useState({});

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogComments", JSON.stringify(comments));
  }, [comments]);

  // Function to add a new comment
  const addComment = (e) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    const newComment = {
      name: commentName,
      text: commentText,
      date: new Date().toLocaleString(),
      replies: [], // Each comment can have replies
    };

    setComments([...comments, newComment]); // Add new comment to the state
    setCommentName(""); // Reset input
    setCommentText("");
  };

  // Function to add a reply to a specific comment
  const addReply = (index) => {
    const reply = replies[index];
    if (!reply?.name || !reply?.text) return;

    const newReply = {
      name: reply.name,
      text: reply.text,
      date: new Date().toLocaleString(),
    };

    const updatedComments = [...comments];
    updatedComments[index].replies.push(newReply); // Add reply to the specific comment
    setComments(updatedComments);

    // Clear the reply input field
    setReplies({ ...replies, [index]: { name: "", text: "" } });
  };

  // Function to update reply input values for a specific comment
  const handleReplyChange = (index, field, value) => {
    setReplies({
      ...replies,
      [index]: {
        ...replies[index],
        [field]: value,
      },
    });
  };

  // Function to delete a comment by index
  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // Function to delete a reply from a comment
  const deleteReply = (commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies = updatedComments[commentIndex].replies.filter(
      (_, i) => i !== replyIndex
    );
    setComments(updatedComments);
  };

  // Filter blog posts based on search input
  const filteredPosts = blogPosts.filter((post) => {
    const content = Array.isArray(post.content)
      ? post.content.join(" ")
      : post.content;

    return (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // JSX Return Block
  return (
    <div className="blogs-container">
      <h2>Explore Switzerland</h2>
      <h3>
        Switzerland is full of beautiful cities, lakes, and mountains like Zurich, Lucerne, Lauterbrunnen, and the Matterhorn.
      </h3>

      {/* Search bar to filter blog posts */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog cards displayed based on search results */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
      ) : (
        <p>No blog posts found.</p>
      )}

      {/* Comment Section */}
      <div className="global-comment-section">
        <h3>Leave a Comment</h3>

        {/* Comment form */}
        <form onSubmit={addComment}>
          <input
            type="text"
            placeholder="Your Name"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <button type="submit">Post Comment</button>
        </form>

        {/* List of Comments and Replies */}
        <div className="comments-list">
          <h4>Comments:</h4>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.name}</strong> <em>({comment.date})</em>
                <p>{comment.text}</p>

                {/* Delete comment button */}
                <button
                  className="delete-btn"
                  onClick={() => deleteComment(index)}
                  style={{
                    color: "red",
                    marginBottom: "20px",
                    marginTop: 5,
                    backgroundColor: "black",
                    fontSize: 13,
                  }}
                >
                  Delete Comment
                </button>

                {/* Reply input fields */}
                <div className="reply-section">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={replies[index]?.name || ""}
                    onChange={(e) =>
                      handleReplyChange(index, "name", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Your Reply"
                    value={replies[index]?.text || ""}
                    onChange={(e) =>
                      handleReplyChange(index, "text", e.target.value)
                    }
                  />
                  <button onClick={() => addReply(index)}>Reply</button>
                </div>

                {/* List of replies */}
                {comment.replies.length > 0 && (
                  <div className="replies-list">
                    {comment.replies.map((reply, rIndex) => (
                      <div key={rIndex} className="reply">
                        <strong>{reply.name}</strong> <em>({reply.date})</em>
                        <p>{reply.text}</p>

                        {/* Delete reply button */}
                        <button
                          className="delete-btn"
                          onClick={() => deleteReply(index, rIndex)}
                          style={{
                            color: "red",
                            marginBottom: "20px",
                            marginTop: 5,
                            backgroundColor: "black",
                            fontSize: 13,
                          }}
                        >
                          Delete Reply
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
