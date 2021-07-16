import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from "antd";
import { Link } from "react-router-dom";
import { createOrUpdateUser } from "../../functions/auth";
import "./Login.css";
import REGISTERIMG from "../../components/images/register.jpg";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user, history]);

  const roleBasedRedirect = (res) => {
    if (res.data.role === "admin") {
      history.push("/");
    } else if (!res.data.name) {
      history.push("/user");
    } else {
      history.push("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          const { data } = res;
          // localStorage.setItem("userInfo", JSON.stringify(data));
          // cookies.set("user-cookie", JSON.stringify(data), { path: "/" });
          cookies.set("opid", data._id, { path: "/" });
          if (res.data.role === "admin") {
            cookies.set("$op_ad", "true", { path: "/" });
          }

          dispatch({
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
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const handelGoogleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
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
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit} className="login__form">
      <input
        type="email"
        required
        className="login__username"
        autoFocus
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="login__password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="createandforgot pb-3">
        <Link to="/register" className="text-success mr-5">
          Create new account?
        </Link>
        <Link to="/forgot/password" className="text-danger ml-5">
          Forgot Password?
        </Link>
      </div>
      <Button
        onClick={handleSubmit}
        className="mb-3 login__email"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );
  return (
    <div className="container-fluid login ">
      <div className="row login__row">
        <div className="login__left container col-md-6">
          {loading ? (
            <Space size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            <>
              <h2 className="login__user">User Login</h2>
              {loginForm()}
              <Button
                onClick={handelGoogleLogin}
                type="primary"
                className="login__google"
                block
                shape="round"
                icon={<GoogleOutlined />}
                size="large"
              >
                Login with Google
              </Button>
            </>
          )}
        </div>
        <div className="col-md-6 register__right">
          <img src={REGISTERIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
