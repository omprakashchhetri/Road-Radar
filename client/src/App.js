import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import IndexPage from "./Components/IndexPage";

// Routing

// Screens
// import PrivatePage from "./Components/Screens/PrivatePage";
import LoginPage from "./Components/Screens/LoginPage";
import RegisterPage from "./Components/Screens/RegisterPage";
import ForgotPasswordPage from "./Components/Screens/ForgotPasswordPage";
import ResetPasswordPage from "./Components/Screens/ResetPasswordPage";
import AddBus from "./Components/Screens/AddBus";
import ViewBus from "./Components/Screens/ViewBus";
import BusPath from "./Components/Screens/BusPath";
import Admin from "./Components/Screens/Admin";
import GetBus from "./Components/Screens/GetBus";
import DeleteBus from "./Components/Screens/DeleteBus";
import UpdateBus from "./Components/Screens/UpdateBus";
import PageNotFound from "./Components/Screens/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
        {/* <Route path="/user" element={PrivatePage} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route
          path="/paswordreset/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route path="/addbus" element={<AddBus />} />
        <Route path="/viewbus" element={<ViewBus />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/getbus" element={<GetBus />} />
        <Route path="/busroute/:busno" element={<BusPath />} />
        <Route path="/delete" element={<DeleteBus />} />
        <Route path="/update/:busno" element={<UpdateBus />}></Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
