import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      <div>
      {posts.map(post =>{
        return <Post key={post.id} post={post} likePost={likePost} comments={post.comments}/>
      })}
    
      </div>
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
