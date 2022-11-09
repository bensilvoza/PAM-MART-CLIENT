// libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../../shared/spacer";
import WidthSpacer from "../../shared/widthSpacer";

// css
import "./form.css";

function Form() {
  const navigate = useNavigate();

  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [province, setProvince] = useState("");
  let [country, setCountry] = useState("");

  function handleClickGoBack() {
    return navigate("/cart");
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    let address = {
      street,
      city,
      province,
      country,
    };

    // save address to localStorage
    localStorage.setItem("address", JSON.stringify(address));

    return navigate("/summary");
  }

  useEffect(function () {
    let address = JSON.parse(localStorage.getItem("address"));
    if (address !== null) {
      setStreet(address["street"]);
      setCity(address["city"]);
      setProvince(address["province"]);
      setCountry(address["country"]);
    }

    return;
  }, []);

  return (
    <Cell span={6}>
      <h1 className="shipping-header">Shipping</h1>
      <form onSubmit={handleSubmitForm}>
        <Input
          required
          value={street}
          type="text"
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Street"
        />

        <Spacer height="1rem" />

        <Input
          required
          value={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />

        <Spacer height="1rem" />

        <Input
          required
          value={province}
          type="text"
          onChange={(e) => setProvince(e.target.value)}
          placeholder="Province"
        />

        <Spacer height="1rem" />

        <Input
          required
          value={country}
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />

        <Spacer height="1rem" />

        <Button kind={KIND.secondary} onClick={handleClickGoBack}>
          Go Back
        </Button>

        <WidthSpacer width="1rem" />

        <Button type="submit">PROCEED TO SUMMARY</Button>
      </form>
    </Cell>
  );
}

export default Form;
