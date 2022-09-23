function Post({ post }) {
  return (
    <>
      <p>{post.user.username}</p>
      <p>{post.caption}</p>
      <img src={post.picture} width="300px" />
    </>
  );
}

export default Post;
