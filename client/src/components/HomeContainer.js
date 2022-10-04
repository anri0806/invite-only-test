import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import FeedPage from "./FeedPage";
import UserProfilePage from "./UserProfilePage";
import MemberList from "./MemberList";

function HomeContainer({ currentUser }) {
  const [posts, setPosts] = useState([]);

  function renderNewPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  function renderFilteredPosts(filteredPosts) {
    setPosts(filteredPosts);
  }

  return (
    <>
      <h2>This is Home Container</h2>
      <Routes>
        <Route
          path="/"
          element={
            <FeedPage
              currentUser={currentUser}
              posts={posts}
              onSubmitAdd={renderNewPost}
              onRenderFilteredPosts={renderFilteredPosts}
            />
          }
        />
        <Route
          path="profile"
          element={
            <UserProfilePage
              currentUser={currentUser}
              onRenderFilteredPosts={renderFilteredPosts}
            />
          }
        />
        <Route path="members" element={<MemberList />} />
      </Routes>
    </>
  );
}

export default HomeContainer;
