// libraries
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import { FormControl } from "baseui/form-control";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Spacer from "../shared/spacer";

// css
import "./form.css";

function Form() {
  const navigate = useNavigate();

  // contexts
  var { handleInformation } = useContext(NotificationContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleClickRegister() {
    return navigate("/register");
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    // communicate to server
    let response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    if (response.data.message === "ERROR") {
      handleInformation("Incorrect credential", "darkred", "1px solid darkred");

      setTimeout(function () {
        handleInformation(undefined, undefined, undefined);
        return;
      }, 10000);

      return;
    } else {
      // customer logged in successfully

      // save JWT to localStorage
      localStorage.setItem(
        "jwt",
        JSON.stringify(`Bearer ${response["data"]["token"]}`)
      );

      // save customer to localStorage
      localStorage.setItem(
        "customer",
        JSON.stringify(response["data"]["customer"])
      );

      return navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <Spacer height=".5rem" />

      <Input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <p className="login-form-forgot-password">Forgot your password?</p>

      <Spacer height=".5rem" />

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
