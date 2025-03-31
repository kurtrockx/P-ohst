import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewBlog from "./pages/NewBlog";
import BlogPage from "./pages/BlogPage";
import UserEntryPage from "./pages/UserEntryPage";
import Navbar from "./components/Navbar";
import MainContainer from "./layout/MainContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<MainContainer />}>
          <Route index element={<Homepage />} />
          <Route path="/addPost" element={<NewBlog />} />
          <Route path="/posts" element={<BlogPage />} />
          <Route path="/user" element={<UserEntryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
