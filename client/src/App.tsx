import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
