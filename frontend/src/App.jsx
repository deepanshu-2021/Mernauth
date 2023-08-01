import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./components/Navbar";
import Mainbox from "./components/Mainbox";
import Signinbox from "./components/Formsignin";
import Signupbox from "./components/signup";
import Loginbar from "./components/Loginbar";
import Succesfullogin from "./components/Succesfullogin";
import Userprofile from "./components/Userprofile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bar />}>
            <Route path="/" element={<Mainbox />} />
            <Route path="/signin" element={<Signinbox />} />
            <Route path="/signup" element={<Signupbox />} />
            <Route path="/login" element={<h1>login</h1>} />
          </Route>
          <Route path="/users" element={<Loginbar />}>
            <Route path="/users/login" element={<Succesfullogin />} />
            <Route path="/users/profile" element={<Userprofile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
