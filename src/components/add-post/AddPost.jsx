import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./AddPost.css";

function AddPost({ onPostAdded }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !content) {
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        category,
        content,
        author: "Anonymous",
        date: new Date().toISOString().split('T')[0]
      });

      setTitle("");
      setCategory("");
      setContent("");

      onPostAdded();

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="add-post-container">
      <h2 className="add-post-title">Create a new post</h2>
      <form onSubmit={handleSubmit} className="add-post-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Post</button>
      </form>
    </div>
  );
}

export default AddPost;
