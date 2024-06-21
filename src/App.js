import React, { useState } from "react";
import { Payment } from "./Payment";
import "./App.css";

//
export default function App() {
  const [checkoutId, setCheckoutId] = useState(
    "E256E2E83931796CE090D19D9B94C2DE.uat01-vm-tx01" // use your own checkoutId
  );
  return (
    <>
      <button
        onClick={() =>
          setCheckoutId("7566A73ADF7D5C8C5ECDD019DE328889.uat01-vm-tx02") // use your own 2nd checkoutId
        }
      >
        Renew Checkout
      </button>
      <br />
      <br />
      <Payment
          key={checkoutId} checkoutId={checkoutId} />
    </>
  );
}
