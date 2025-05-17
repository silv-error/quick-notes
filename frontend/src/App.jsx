import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div data-theme="night">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/create"} element={<CreatePage />} />
          <Route path={"/note/:id"} element={<NoteDetailPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
