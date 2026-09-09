import { useRef, type FormEvent } from "react";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { Project } from "./Components/Project";
import { FetchingData } from "./Components/FetchingData";


export function App() {
  return (
    <div>
      <Project/> 
      {/* <FetchingData/> */}
    </div>
  );
}
