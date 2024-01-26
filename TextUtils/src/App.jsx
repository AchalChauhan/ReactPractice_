import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar title="Text Utils" aboutHead="About TextUtils" />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
