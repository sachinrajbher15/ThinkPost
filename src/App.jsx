import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPosts from "./pages/UserPostsPage";
import NotificationsPage from "./pages/NotificationsPage";
import UsersPage from "./pages/UsersPage";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";
import AuthorPosts from "./components/AuthorPosts";
import "./styles/App.css";
import { PostProvider } from "./redux/PostContext";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <div className="app-container">
          <header className="header-container">
            {/* <h1>ThinkPost – A space for thoughts and posts.</h1> */}
            <h1 className="heading"><span className="large-text">ThinkPost</span> – A space for thoughts and posts.</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-posts">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
              </ul>
              <button className="button">Refresh Notifications</button>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user-posts" element={<UserPosts />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/view-post/:postId" element={<ViewPost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/author-posts/:authorName" element={<AuthorPosts />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
