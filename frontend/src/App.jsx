import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./components/Navbar";
import Mainbox from "./components/Mainbox";
import Signinbox from "./components/Formsignin";
import Signupbox from "./components/signup";
import Loginbar from "./components/Loginbar";
import Succesfullogin from "./components/Succesfullogin";
import Userprofile from "./components/Userprofile";
import Logout from "./components/Logout";
import Deleteuser from "./components/Deleteuser";
import Updateprofile from "./components/Updateprofile";
import { MyContextProvider } from "./contex/Authcontext";
import RouteProtection from "./protection/RouteProtection";
function App() {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Bar />}>
              <Route path="/" element={<Mainbox />} />
              <Route path="/signin" element={<Signinbox />} />
              <Route path="/signup" element={<Signupbox />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/users/delete" element={<Deleteuser />} />
            </Route>
            <Route path="/users" element={<Loginbar />}>
              <Route
                path="/users/login"
                element={<RouteProtection Component={Succesfullogin} />}
              />
              <Route path="/users/profile" element={<Userprofile />} />
              <Route
                path="/users/update"
                element={<RouteProtection Component={Updateprofile} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
}

export default App;
