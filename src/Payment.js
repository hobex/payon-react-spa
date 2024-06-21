import React from "react";
import { Helmet } from "react-helmet";

export function Payment({ checkoutId }) {
  console.log("Render Payment Component");
  // @ts-ignore
  window.wpwlOptions = {};

  // unload widget before it gets re-rendered with new checkout id + scripts
  var unloadWidget = function() {
    // @ts-ignore
    if (window.wpwl !== undefined && window.wpwl.unload !== undefined) {
        // @ts-ignore
        window.wpwl.unload();
        document.querySelectorAll('script').forEach(function (script) {
          if (script.src.indexOf('static.min.js') !== -1) {
            script.remove();
          }
        });
    }
};

  // on component unload
  React.useEffect(() => {
    return () => {
      unloadWidget();
    };
  }, []);

  return (
    <>
      <Helmet>
        <script
          src={`https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`}
        ></script>
      </Helmet>
      <span>{new Date().toISOString()}</span>
      <br />
      <span>Payment for Checkout: {checkoutId}</span>
      <br />
      <br />
      <div key={checkoutId} style={{ width: "500px" }}>
        <form
          className="paymentWidgets"
          action="https://hobex.at"
          method="POST"
          data-brands="VISA MASTER"
        ></form>
      </div>
    </>
  );
}
