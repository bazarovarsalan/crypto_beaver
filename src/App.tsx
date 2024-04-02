import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Route, Routes } from "react-router";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Coin from "./pages/Coin";

function App() {
  const [headerMove, setHeaderMove] = useState(false);

  function scrollHeader() {
    if (window.scrollY >= 80) {
      setHeaderMove(true);
    } else {
      setHeaderMove(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);
  return (
    <>
      <ScrollToHashElement />
      <Header headerMove={headerMove} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":coinId" element={<Coin />}></Route>
      </Routes>
    </>
  );
}

export default App;
