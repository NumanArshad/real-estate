import React from "react";

function AboutAgent({ first_name, last_name }) {
  return (
    <div className="col-12">
      <div className="p-4">
        <h3 className="mb-4 h4">About {`${first_name} ${last_name}`}</h3>
        <p className="mb-0">
          {`${first_name} ${last_name}`} is well-versed with contemporary business models. The
          experience he gained during his service with leading brands has
          widened his vision about designing and implementing marketing
          strategy. He is working with Samara's Estate for the last five years
          as Marketing & PR Head. Backed by his Masters in Marketing, Syed Taaha
          is quite capable of recommending ultimate solutions in housing and
          commercial sector. A single consultancy session with him is enough to
          reach a smart investment solution. His result-oriented approach is
          benefiting the company and the clients.
        </p>
      </div>
    </div>
  );
}

export default AboutAgent;
