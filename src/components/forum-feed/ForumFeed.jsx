import { useState } from "react";
import "./ForumFeed.css";

const initialPosts = [
  {
    id: "1",
    title: "Review: Urban Street Runner",
    category: "Reviews",
    author: "SneakerHead99",
    content: "I've been wearing these sneakers for a week and the comfort is unreal. Highly recommended for the city.",
    date: "2026-03-10"
  },
  {
    id: "2",
    title: "Looking for Night Pulse 90 (Size 42)",
    category: "Trade",
    author: "UrbanKicks Fan",
    content: "I have unworn Air Flex Lites in their box. Anyone up for a clean trade for the Night Pulse?",
    date: "2026-03-12"
  },
  {
    id: "3",
    title: "New drops of the season",
    category: "News",
    author: "Admin",
    content: "Stay tuned this weekend, we will release limited stock of the new collaboration. Don't miss out!",
    date: "2026-03-14"
  }
];

function ForumFeed() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");

  const [newPost, setNewPost] = useState({ title: "", category: "General", content: "" });

  const [editingPostId, setEditingPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({ title: "", category: "", content: "" });

  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // CREATE
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const postToAdd = {
      id: Date.now().toString(),
      title: newPost.title,
      category: newPost.category,
      author: "SneakerLover (You)",
      content: newPost.content,
      date: new Date().toISOString().split('T')[0]
    };

    setPosts([postToAdd, ...posts]);
    setNewPost({ title: "", category: "General", content: "" });
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // START EDITING
  const handleEditClick = (post) => {
    setEditingPostId(post.id);
    setEditFormData({ title: post.title, category: post.category, content: post.content });
  };

  // CANCEL EDITING
  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  // SAVE UPDATE
  const handleSaveEdit = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, title: editFormData.title, category: editFormData.category, content: editFormData.content }
        : post
    ));
    setEditingPostId(null);
  };

  return (
    <section className="forum-feed-section">
      <div className="section-header">
        <h2 className="section-title">Community Feed (Local CRUD)</h2>
        <p className="section-subtitle">Connect with other sneakerheads.</p>
      </div>

      <div className="forum-create-box">
        <h3>Publish new Post</h3>
        <form onSubmit={handleAddPost} className="forum-create-form">
          <input
            type="text"
            placeholder="Post title..."
            value={newPost.title}
            onChange={e => setNewPost({ ...newPost, title: e.target.value })}
            required
            className="form-input"
          />
          <select
            value={newPost.category}
            onChange={e => setNewPost({ ...newPost, category: e.target.value })}
            className="form-input"
          >
            <option value="General">General</option>
            <option value="News">News</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Trade">Trade</option>
            <option value="Reviews">Reviews</option>
          </select>
          <textarea
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={e => setNewPost({ ...newPost, content: e.target.value })}
            required
            className="form-textarea"
          />
          <button type="submit" className="btn-primary">Add Post</button>
        </form>
      </div>

      <hr className="feed-divider" />

      <div className="forum-search">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="forum-search-input"
        />
      </div>

      <div className="forum-posts-grid">
        {filteredPosts.map(post => (
          <div key={post.id} className="forum-post-card">

            {editingPostId === post.id ? (
              <div className="edit-mode-form">
                <input
                  type="text"
                  value={editFormData.title}
                  onChange={e => setEditFormData({ ...editFormData, title: e.target.value })}
                  className="form-input edit-input"
                />
                <select
                  value={editFormData.category}
                  onChange={e => setEditFormData({ ...editFormData, category: e.target.value })}
                  className="form-input edit-input"
                >
                  <option value="General">General</option>
                  <option value="News">News</option>
                  <option value="Sneakers">Sneakers</option>
                  <option value="Trade">Trade</option>
                  <option value="Reviews">Reviews</option>
                </select>
                <textarea
                  value={editFormData.content}
                  onChange={e => setEditFormData({ ...editFormData, content: e.target.value })}
                  className="form-textarea edit-input"
                />
                <div className="card-actions">
                  <button onClick={() => handleSaveEdit(post.id)} className="btn-save">Save (Update)</button>
                  <button onClick={handleCancelEdit} className="btn-cancel">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-category">{post.category}</p>
                <p className="post-meta">By {post.author} on {post.date}</p>
                <p className="post-content">{post.content}</p>

                <div className="card-actions">
                  <button onClick={() => handleEditClick(post)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDeletePost(post.id)} className="btn-delete">Delete</button>
                </div>
              </>
            )}

          </div>
        ))}
        {filteredPosts.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>No posts found for that category.</p>
        )}
      </div>
    </section>
  );
}

export default ForumFeed;
