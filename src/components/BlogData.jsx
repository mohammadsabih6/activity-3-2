import React, { useState, useEffect } from 'react';
import styles from './BlogData.module.css'
import BlogPosts from './BlogPosts';
import NewPost from './NewPost';

function BlogData() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(article => setArticles(article))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.BlogData}>
      <nav><h1>Blog Posts</h1><h6>By Umair and Sabeeh</h6></nav>
      <NewPost setPosts={setArticles} />
      <BlogPosts posts={articles} />
    </div>
  );
}

export default BlogData;