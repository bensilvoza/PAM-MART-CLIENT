// libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";

// components
import Spacer from "../shared/spacer";

function Form() {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleClickRegister() {
    return navigate("/register");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    // ...
  }

  return (
    <form onSubmit={handleSubmitForm}>
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
        LOGIN
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
        onClick={handleClickRegister}
      >
        REGISTER
      </Button>
    </form>
  );
}

export default Form;
