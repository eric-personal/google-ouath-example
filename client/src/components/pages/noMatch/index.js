import React from "react";
import { Link } from "react-router-dom";
import Center from "../../styled/center";

const NoMatch = () => {
  return (
    <Center>
      no page found, Go back to <Link to="/">Home</Link>
    </Center>
  );
};

export default NoMatch;
