import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { NoMatch, Home } from "./components/pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
