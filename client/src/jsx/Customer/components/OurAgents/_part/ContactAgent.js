import React from "react";

function ContactAgent({ phone, first_name, last_name }) {
  return (
    <div className="col-12 p-4 findAgentForm">
      <h4 className="mb-3">Contact</h4>
      <div className="d-flex justify-content-between">
        <h5>Mobile</h5>
        <a className="number" href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
      <hr />
      <p className="text-center font-12">Find {`${first_name} ${last_name}`} on:</p>
      <a href={`whatsapp://send?text=Welcome to samara's real estate!&phone=+92${phone}`}>
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default ContactAgent;
