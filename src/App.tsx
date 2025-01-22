import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
