import { Routes, Route } from "react-router-dom";
import FeedPage from "./FeedPage";

function HomeContainer({ currentUser }) {
  return (
    <>
      <p>This is Home Container</p>
      <Routes>
        <Route path="/" element={<FeedPage currentUser={currentUser} />} />
      </Routes>
    </>
  );
}

export default HomeContainer;
