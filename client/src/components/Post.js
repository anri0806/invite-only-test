function Post({ post, onClickDelete }) {
  
  function handleClick() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onClickDelete(post);
      }
    });
  }

  return (
    <div>
      <br />
      <p>{post.user.username}</p>
      <p>{post.caption}</p>
      {post.picture === null ? null : (
        <img src={post.picture} width="300px" alt="" />
      )}
      <button onClick={handleClick}>🗑️</button>
    </div>
  );
}

export default Post;
