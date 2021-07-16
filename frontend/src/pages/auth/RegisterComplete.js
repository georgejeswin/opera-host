import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  // const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");
  // const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (!email || !password) {
      toast.error("email and password is required");
      return;
    }
    // if (fullName.length < 3) {
    //   toast.error("Full name must be atleast 3 characters long");
    //   return;
    // }
    if (password.length < 6) {
      toast.error("password must be atleast 6 characters long");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        //remove user email from local storge
        window.localStorage.removeItem("emailForRegistration");
        //get user id token
        let user = auth.currentUser;

        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //redux store
        // console.log("user>>>", user, "idTokenResult>>>", idTokenResult);
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            const { data } = res;
            cookies.set("opid", data._id, { path: "/" });
            // localStorage.setItem("userInfo", JSON.stringify(data));
            // cookies.set("user-cookie", JSON.stringify(data), { path: "/" });
            if (data.role === "admin") {
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
          })
          .catch((err) => console.log(err));

        //redirect
        history.push("/user");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="register__mail" disabled value={email} />

      <input
        type="password"
        className="register__mail"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button type="submit" className="register__button">
        Complete Registration
      </button>
    </form>
  );
  return (
    <div className="container p-5 col-offset-md-3 ">
      <div className="row">
        <div className="col-md-6 col-offset-md-3">
          <h2 className="login__user">Register Complete</h2>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
