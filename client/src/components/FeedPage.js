import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

function FeedPage({ currentUser }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/group_posts/${currentUser.group_id}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [posts.id]);

  useEffect(() => {
    fetch(`/group_comments/${currentUser.group_id}`)
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  }, [comments.id]);

  function renderNewPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  function handleDeletePost(deletedItem) {
    const updatedPosts = posts.filter((post) => post.id !== deletedItem.id);
    setPosts(updatedPosts);
  }

  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
  }

  function handleDeleteComment(deletedItemID) {
    const updatedComments = comments.filter((com) => com.id !== deletedItemID);
    setComments(updatedComments);
  }

  function handleEditComment(updatedItem) {
    const updatedComments = comments.map((com) =>
      com.id === updatedItem.id ? updatedItem : com
    );

    setComments(updatedComments);
  }

  const sortedPosts = [...posts].sort((a, b) =>
    a.created_at > b.created_at ? -1 : 1
  );

  return (
    <>
      <p>This is Feed Page</p>
      <PostForm currentUser={currentUser} onSubmitAdd={renderNewPost} />
      <PostCard
        currentUser={currentUser}
        posts={sortedPosts}
        comments={comments}
        onClickDelete={handleDeletePost}
        onSubmitAddCom={handleAddComment}
        onDeleteComment={handleDeleteComment}
        onEditComment={handleEditComment}
      />
    </>
  );
}

export default FeedPage;
