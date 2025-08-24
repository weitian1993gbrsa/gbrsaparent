import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
export default function App() {
  return (<Router><Routes><Route path="/" element={<Login />} /></Routes></Router>);
}
