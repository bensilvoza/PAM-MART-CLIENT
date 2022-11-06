// libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";

// components
import Spacer from "../shared/spacer";

function Form() {
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function handleClickLogin() {
    return navigate("/login");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    // ...
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />

      <Spacer height="1rem" />

      <Input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <Spacer height="1rem" />

      <Input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <Spacer height="1rem" />

      <Input
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="confirm password"
      />

      <Spacer height="1rem" />

      <Button
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
            },
          },
        }}
        type="submit"
      >
        REGISTER
      </Button>

      <Spacer height=".5rem" />

      <Button
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
            },
          },
        }}
        kind={KIND.secondary}
        onClick={handleClickLogin}
      >
        LOGIN
      </Button>
    </form>
  );
}

export default Form;
