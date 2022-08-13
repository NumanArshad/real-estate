import React, { CSSProperties, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PulseLoader from "react-spinners/ClockLoader";
const override: CSSProperties = {};

const LoaderPulse = ({ active, color }) => {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  return (
    <PulseLoader
      color={color ? color : "#000"}
      loading={active}
      cssOverride={override}
      size={25}
    />
  );
};

export default LoaderPulse;
