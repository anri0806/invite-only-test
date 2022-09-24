import Post from "./Post";

function PostCard({ posts, onClickDelete }) {
  const postCards = posts.map((post) => (
    <Post key={post.id} post={post} onClickDelete={onClickDelete} />
  ));

  return (
    <>
      {postCards}
      {/* <Post post={post} onClickDelete={onClickDelete} /> */}
    </>
  );
}

export default PostCard;
