// libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

// components
import Spacer from "../../shared/spacer";

// utils
import uid from "../../../../utils/shared/uid";

function Form() {
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState("");

  async function handleSubmitForm(e) {
    e.preventDefault();

    let product = {
      id: uid(),
      name: name,
      price: price,
      image: image,
      description: description,
      quantity: quantity,
    };

    // communicate to server
    let response = await axios.post(
      "http://localhost:5000/administrator/product/create",
      product
    );
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <Spacer height="1rem" />

      <Input
        value={price}
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <Spacer height="1rem" />

      <Input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image"
      />

      <Spacer height="1rem" />

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        size={SIZE.large}
        placeholder="Description"
      />

      <Spacer height="1rem" />

      <Input
        value={quantity}
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
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
        Submit
      </Button>
    </form>
  );
}

export default Form;
