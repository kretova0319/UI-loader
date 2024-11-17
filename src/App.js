import { useEffect, useState } from "react";
import "./App.css";
import LoaderPage from "./LoaderPage";

function App() {
  const [stateloader, setstateLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setstateLoader(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{stateloader && <LoaderPage />}</div>;
}

export default App;
