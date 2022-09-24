import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

function FeedPage({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [posts.id]);

  function renderNewPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  function handleDeletePost(deletedItem) {
    const updatedPosts = posts.filter((post) => post.id !== deletedItem.id);
    setPosts(updatedPosts);
  }

  const sortedPosts = [...posts].sort((a, b) =>
    a.created_at > b.created_at ? -1 : 1
  );

  return (
    <>
      <p>This is Feed Page</p>
      <PostForm currentUser={currentUser} onSubmitAdd={renderNewPost} />
      <PostCard posts={sortedPosts} onClickDelete={handleDeletePost} />
      {/* {sortedPosts.map((post) => (
        <PostCard key={post.id} post={post} onClickDelete={handleDeletePost} />
      ))} */}
    </>
  );
}

export default FeedPage;
