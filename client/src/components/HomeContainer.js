import { Routes, Route } from "react-router-dom";
import FeedPage from "./FeedPage";

function HomeContainer() {
  return (
    <>
      <p>This is Home Container</p>
      <Routes>
        <Route path="/" element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default HomeContainer;
