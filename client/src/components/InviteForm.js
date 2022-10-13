import { useState } from "react";

function InviteForm() {
  const [email, setEmail] = useState("");

  /// START FROM HERE ///
  // call User.invite!(email: 'morty@ricknmortyforever1000years.com')
  // to create a user, assign user an invite token,
  // and set it up so the user can sign up via the email that they receive

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/users_invitations", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application.json",
      // },
      body: JSON.stringify({ user: { email: email } }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("successful: ", data);
        });
      } else {
        res.json().then((err) => console.log("error: ", err.error));
      }
    });

    //     res.json())
    //     .then((data) => console.log(data));

    //     setEmail("")
  }

  return (
    <>
      <h3>Send an invitation</h3>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <button>Send</button>
      </form>
    </>
  );
}
export default InviteForm;
