import React from "react";
import styled from "styled-components";

const Center = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default Center;
