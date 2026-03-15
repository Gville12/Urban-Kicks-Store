import { useState, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot, 
  query, 
  orderBy 
} from "firebase/firestore";
import { db } from "../../firebase";
import "./ForumFeed.css";

function ForumFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [newPost, setNewPost] = useState({ title: "", category: "General", content: "" });

  const [editingPostId, setEditingPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({ title: "", category: "", content: "" });

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    try {
      const postToAdd = {
        title: newPost.title,
        category: newPost.category,
        author: "SneakerLover (You)",
        content: newPost.content,
        date: new Date().toISOString()
      };

      await addDoc(collection(db, "posts"), postToAdd);
      setNewPost({ title: "", category: "General", content: "" });
    } catch (error) {
      console.error("Error adding post: ", error);
      alert("Error adding post. Check your Firestore rules.");
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const handleEditClick = (post) => {
    setEditingPostId(post.id);
    setEditFormData({ title: post.title, category: post.category, content: post.content });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  const handleSaveEdit = async (id) => {
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        title: editFormData.title,
        category: editFormData.category,
        content: editFormData.content
      });
      setEditingPostId(null);
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  };

  if (loading) {
    return (
      <section className="forum-feed-section">
        <div className="section-header">
          <h2 className="section-title">Community Feed</h2>
          <p className="section-subtitle">Loading posts...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="forum-feed-section">
      <div className="section-header">
        <h2 className="section-title">Community Feed (Firebase CRUD)</h2>
        <p className="section-subtitle">Connect with other sneakerheads. Real-time database enabled.</p>
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
                 <p className="post-meta">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
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
