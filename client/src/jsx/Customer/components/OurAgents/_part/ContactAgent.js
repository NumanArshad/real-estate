import React from "react";

function ContactAgent() {
  return (
    <div className="col-12 p-4 findAgentForm">
      <h4 className="mb-3">Contact</h4>
      <div className="d-flex justify-content-between">
        <h5>Mobile</h5>
        <a className="number" href="tel:+923224865124">
          +923224865124
        </a>
      </div>
      <hr />
      <p className="text-center font-12">Find Syed Taaha Iqbal on:</p>
      <a href="">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default ContactAgent;
