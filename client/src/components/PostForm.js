import { useState } from "react";

function PostForm({ currentUser }) {
  const [caption, setCaption] = useState("");
  const [picture, setPicture] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", currentUser.id);
    formData.append("caption", caption);
    formData.append("picture", picture);

    fetch("/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((newPost) => console.log(newPost));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          type="text"
          name="caption"
          placeholder="Type caption"
        />
        <br />
        <input
          onChange={(e) => setPicture(e.target.files[0])}
          type="file"
          name="picture"
          placeholder="Add picture"
        />
        <br />
        <button>Post</button>
      </form>
    </>
  );
}

export default PostForm;
