import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-black text-white rounded-xl p-2 mb-5   ">
        Tailwind is Kool
      </h1>
      <Card productName="Normal Jacket" price="$80" />
      <Card productName="Utility Jacket" price="$100" />
    </>
  );
}

export default App;
