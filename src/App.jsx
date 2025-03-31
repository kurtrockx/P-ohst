import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route to="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>;
}
