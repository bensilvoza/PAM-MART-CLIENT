// libraries
import { useState, useEffect } from "react";
import { Cell } from "baseui/layout-grid";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

// css
import "./manage-my-account.css";

function ManageMyAccount() {
  let [customer, setCustomer] = useState({});
  let [address, setAddress] = useState({});

  useEffect(function () {
    function populateCustomerAndAddress() {
      let storageResponseCustomer = JSON.parse(
        localStorage.getItem("customer")
      );
      let storageResponseAddress = JSON.parse(localStorage.getItem("address"));

      setCustomer(storageResponseCustomer);
      setAddress(storageResponseAddress);
    }
    // call
    populateCustomerAndAddress();

    return;
  }, []);

  return (
    <Cell span={8}>
      <h2 className="manage-account-header">Personal Information</h2>
      <FormControl label="Name">
        <Input value={customer["name"]} />
      </FormControl>

      <FormControl label="Email">
        <Input value={customer["email"]} />
      </FormControl>

      <FormControl label="Street">
        <Input value={address["street"]} />
      </FormControl>

      <FormControl label="City">
        <Input value={address["city"]} />
      </FormControl>

      <FormControl label="Province">
        <Input value={address["province"]} />
      </FormControl>

      <FormControl label="Country">
        <Input value={address["country"]} />
      </FormControl>
    </Cell>
  );
}

export default ManageMyAccount;
