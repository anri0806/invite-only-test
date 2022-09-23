import Post from "./Post";

function PostCard({ posts }) {
  const postCards = posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <>
      <p>this is post cards</p>
      {postCards}
    </>
  );
}

export default PostCard;
