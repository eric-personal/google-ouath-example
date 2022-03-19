import React, { useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then(({ message }) => console.log("message = ", message))
      .catch((error) => console.log("error = ", error));
  }, []);
  const onLogout = (event) => {
    event.preventDefault();
    fetch("/google/logout", { method: "POST" })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          // Reload browser to allow express authenticate app
          window.location.reload(false);
        }
      });
  };
  return (
    <Container>
      <div>
        <a href="/logout" onClick={onLogout}>
          Logout
        </a>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: flex-end;
  padding: 5px 20px;
`;

export default Header;
