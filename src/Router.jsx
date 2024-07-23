import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Protect from "./pages/auth/protect";
import Login from "./pages/auth/login";
import AuthProvide from "./pages/auth/AuthProvider";

function Router() {
  return (
    <BrowserRouter>
      <AuthProvide>
        <Routes>
          <Route element={<Protect />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvide>
    </BrowserRouter>
  )
}

export default Router