import React from 'react';
import styles from './BlogPosts.module.css'

function BlogPosts({ posts }) {
  return (
    <ul className='allPosts'>
      {posts.map(post => (
        <li key={post.id} className={styles.title}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;