import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import AddPost from "../../components/add-post/AddPost";
import "./Forum.css";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const postsCollection = collection(db, "posts");
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postList);
    } catch (err) {
      console.error("Error fetching posts: ", err);
      setError("No se pudieron cargar los posts. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.category?.toLowerCase().includes(searchTerm.toLowerCase()) ?? true
  );

  return (
    <main className="forum-page">
      <section className="forum-header-section">
        <h1 className="forum-title">Community Forum</h1>
        <p className="forum-subtitle">Connect with other sneakerheads.</p>
      </section>

      <AddPost onPostAdded={fetchPosts} />

      <section className="forum-posts-section">
        <div className="forum-search">
          <input
            type="text"
            placeholder="Search by category..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="forum-search-input"
          />
        </div>

        {loading ? (
          <p style={{ padding: "2rem", textAlign: "center" }}>Cargando posts...</p>
        ) : error ? (
          <p style={{ padding: "2rem", textAlign: "center", color: "red" }}>{error}</p>
        ) : (
          <div className="forum-posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="forum-post-card">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-category">{post.category}</p>
                <p className="post-meta">By {post.author} on {post.date}</p>
                <p className="post-content">{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Forum;
