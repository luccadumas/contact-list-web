import { Route, Routes } from "react-router-dom";

import { Repo } from "./pages/Repo";
import { Login } from "./pages/Authentication/Login";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}
