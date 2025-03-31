import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import UserEntryPage from "./pages/UserEntryPage";
import MainContainer from "./layout/MainContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainContainer />}>
          <Route index element={<Homepage />} />
          <Route path="/addPost" element={<NewPost />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/user" element={<UserEntryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
