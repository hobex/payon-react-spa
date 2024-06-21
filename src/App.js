import React, { useState } from "react";
import { Payment } from "./Payment";
import "./App.css";

//
export default function App() {
  const [checkoutId, setCheckoutId] = useState(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.uat01-vm-tx01" // use your own checkoutId
  );
  return (
    <>
      <button
        onClick={() =>
          setCheckoutId("xxxxxxxxxxxxxxxxxxxxxxxxxxx.uat01-vm-tx02") // use your own 2nd checkoutId
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
