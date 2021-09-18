import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import InputField from "./../components/InputField";
import Button from "./../components/Button";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userState, setUserState] = useState(initialState);
  const { email, password } = userState;

  const { state, dispatch } = useContext(DataContext);
  const { currentUser } = state;

  const router = useRouter();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
    dispatch({ type: {}, payload: {} });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/login", userState);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    dispatch({
      type: "AUTH",
      payload: { token: res.accessToken, user: res.data.user },
    });

    Cookie.set("jwt", res.refreshToken, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
    console.log(res);
  };

  useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <form
      onSubmit={handelSubmit}
      className="sm:mt-10 mt-5 mb-2 py-5 sm:py-10 flex mx-auto flex-col items-center justify-center max-w-sm sm:max-w-sm   space-y-9 border-4"
    >
      <h2 className="text-center text-4xl">Login</h2>
      <div className="flex  flex-col items-center justify-center space-y-4 w-full pt-5">
        <InputField
          fieldName="email"
          type="text"
          handelChange={handelChange}
          placeholder="Email"
          value={email}
        />
        <InputField
          fieldName="password"
          type="password"
          handelChange={handelChange}
          placeholder="Password"
          value={password}
        />
        <small>
          <span className=" ml-1 font-bold text-secondaryButtonBg">
            <Link href="/forgotPassword">Forgot Your Password</Link>
          </span>
        </small>
      </div>
      <Button
        type="submit"
        text="Login"
        classes="max-w-2x bg-primaryButtonBg hover:bg-primaryButtonBgHover text-bodyColor py-2 px-4  "
      />
      <small>
        Dont have an account
        <span className=" ml-1 font-bold text-secondaryButtonBg">
          <Link href="/signup">Sign up</Link>
        </span>
      </small>
    </form>
  );
};

export default Login;
