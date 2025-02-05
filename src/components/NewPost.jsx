import React, { useState } from 'react';
import styles from './NewPost.module.css'

function NewPost({ setPosts }) {
  const [newArticle, setNewArticle] = useState({ title: ''});
  const [Saving, setSaving] = useState(false)
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSaving(true)

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    .then(res => res.json())
    .then(data => {
      setPosts(posts => [...posts, data]);
      setNewArticle({ title: ''});
      setSaving(false)
      })
    };
    
    const handleInputChange = (event) => {
      setNewArticle({ ...newArticle, [event.target.name]: event.target.value });
  };
  
  return (
    <>
    <form className={styles.title} onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          userId="title"
          name="title"
          value={newArticle.title}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{Saving ? 'Being Saved...' : 'Save'}</button>
    </form>
      <hr/>
      <br />
    </>
  );
}

export default NewPost;