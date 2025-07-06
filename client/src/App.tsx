import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { SelectedPage } from "./shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
