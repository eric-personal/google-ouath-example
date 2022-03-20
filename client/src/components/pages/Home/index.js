import React from "react";
import Center from "../../styled/center";
import styled from "styled-components";

const Home = () => {
  return (
    <Center>
      <Welcome>Welcome Home 👋</Welcome>
    </Center>
  );
};

const Welcome = styled.div`
  font-size: 24px;
`;

export default Home;
