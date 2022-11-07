// libraries
import { useState, useContext, useId } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Spacer from "../shared/spacer";

// utils
import uid from "../../../utils/shared/uid";

function Form() {
  const navigate = useNavigate();

  // contexts
  var { handleInformation } = useContext(NotificationContext);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function handleClickLogin() {
    return navigate("/login");
  }

  function checkPassword() {
    if (password !== confirmPassword) {
      handleInformation(
        "Passwords do not match",
        "darkred",
        "1px solid darkred"
      );

      setTimeout(function () {
        handleInformation(undefined, undefined, undefined);
        return;
      }, 10000);

      return "ERROR";
    } else {
      if (password.length >= 6) {
        return "OK";
      } else {
        handleInformation("Password too short", "darkred", "1px solid darkred");

        setTimeout(function () {
          handleInformation(undefined, undefined, undefined);
          return;
        }, 10000);

        return "ERROR";
      }
    }
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    // check password
    if (checkPassword() !== "OK") {
      return;
    }

    let user = { id: uid(), name: name, email: email, password: password };

    // communicate to server
    let response = await axios.post("http://localhost:5000/register", user);

    if (response.data.message === "OK") {
      handleInformation(
        "Registered successfully",
        "darkgreen",
        "1px solid darkgreen"
      );

      setTimeout(function () {
        handleInformation(undefined, undefined, undefined);
        return;
      }, 10000);

      return;
    }
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
