import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

function FeedPage({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <p>This is Feed Page</p>
      <PostForm currentUser={currentUser} />
      <PostCard posts={posts} />
    </>
  );
}

export default FeedPage;
