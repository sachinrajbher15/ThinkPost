import React from 'react';
import PostsList from '../components/PostsList';
import { usePosts } from '../redux/PostContext';
import '../styles/LandingPage.css';

function LandingPage() {
  const { posts, setPosts } = usePosts();
  const [postTitle, setPostTitle] = React.useState("");
  const [postAuthor, setPostAuthor] = React.useState("");
  const [postContent, setPostContent] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: postTitle,
      author: postAuthor,
      content: postContent,
      time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      reactions: {
        thumbsUp: 0,
        heart: 0,
        party: 0,
        comments: 0
      }
    };
    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostAuthor("");
    setPostContent("");
  };

  return (
    <div className="landing-page">
      <h1>Add a New Post</h1>
      <div className="new-post">
        <form onSubmit={handleSubmit}>
          <label>Post Title:</label>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />

          <label>Author:</label>
          <select
            id="postAuthor"
            value={postAuthor}
            onChange={(e) => setPostAuthor(e.target.value)}
            required
          >
            <option value="" disabled>Select Author</option>
            <option value="Sachin">Sachin</option>
            <option value="Kumar">Kumar</option>
            <option value="Rajbher">Rajbher</option>
          </select>

          <label>Content:</label>
          <textarea
            id="postContent"
            rows="4"
            cols="20"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
          />

          <button type="submit">Save Post</button>
        </form>
      </div>

      <h2>All Posts</h2>
      <PostsList posts={posts} />
    </div>
  );
}

export default LandingPage;
