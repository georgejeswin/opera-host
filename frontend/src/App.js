import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Header from "./components/nav/Header";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { currentUser } from "./functions/auth";
import UserLandingPage from "./pages/user/UserLandingPage";
import UserPrivateRoute from "./components/routes/UserPrivateRoute";
import AdminPrivateRoute from "./components/routes/AdminPrivateRoute";
import { FileUpload } from "./pages/FileUpload";
import NavTop from "./components/nav/NavTop";
import Footer from "./components/Footer";
import AdminLandingPage from "./pages/admin/AdminLandingPage";
import AdminViewMessages from "./pages/admin/AdminViewMessages";
import Payment from "./pages/Payment";
import UserStatus from "./pages/user/UserStatus";
import { getFiles } from "./actions/fileActions";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import StudyPage from "./pages/StudyPage";
import ScrollToTop from "./functions/ScrollToTop";
import NotFound from "./pages/NotFound";
import Cookies from "universal-cookie";
const cookies = new Cookies();


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            const { data } = res;
            cookies.set("opid", data._id, { path: "/" });
            if (res.data.role === "admin") {
              cookies.set("$op_ad", "true", { path: "/" });
            }            dispatch({
              type: "LOGGEED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                picture: res.data.picture,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });

    return () => unSubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavTop />
        {/* <NavBar /> */}
        <Header />
        <ToastContainer />
        <Switch>
          <UserPrivateRoute exact path="/upload" component={FileUpload} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/study-in" component={StudyPage} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms&conditions" component={Terms} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />

          <Route exact path="/" component={Home} />

          <UserPrivateRoute exact path="/user" component={UserLandingPage} />
          <UserPrivateRoute exact path="/user/status" component={UserStatus} />
          <UserPrivateRoute exact path="/payments" component={Payment} />

          <AdminPrivateRoute
            exact
            path="/admin/dashboard"
            component={AdminLandingPage}
          />
          <AdminPrivateRoute
            exact
            path="/admin/messages"
            component={AdminViewMessages}
          />
          <Route exact component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
