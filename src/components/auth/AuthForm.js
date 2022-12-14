import { useState } from "react";

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [FormData, setFormData] = useState();
  const [login, setLogin] = useState(null);
  const [logout, setLogout] = useState(null);
  const [user, setUser] = useState(null);
  const [useAuthForm] = useAuth();
}

function handleSubmit(e) {
  console.log();
  e.preventDefault();
  setIsLoading(true);

  // const formData = new FormData(e.target);
  const payload = Object.fromEntries(FormData.entries());

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        props.handleSuccessfulLogin(data);
        props.history.push("/dashboard");
      }
    })
    .catch((err) => {
      setIsLoading(false);
      console.error("Login Error: ", err);
    });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="Email" name="email" type="email" />
      </div>

      <div>
        <input placeholder="Password" name="password" type="password" />
      </div>
      <button disabled={isLoading}>Login</button>
    </form>
  );
}
