import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import InputField from "./../components/InputField";
import Button from "./../components/Button";
import { DataContext } from "../store/GlobalState";
import valid from "../utils/validate";
import { postData } from "../utils/fetchData";

const signup = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    DOB: "",
    password: "",
    passwordConfirm: "",
  };

  const [userState, setUserState] = useState(initialState);
  const { firstname, lastname, email, DOB, password, passwordConfirm } =
    userState;

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

    const errMsg = valid(
      firstname,
      lastname,
      email,
      DOB,
      password,
      passwordConfirm
    );

    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/signup", userState);
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
      className="sm:mt-1 mt-5 md:mb-2 mb-9 pt-8 pb-10 sm:py-8 flex mx-auto flex-col items-center justify-center max-w-sm sm:max-w-sm   space-y-6 border-4"
    >
      <h2 className="text-center text-4xl">Sign up</h2>
      <div className="flex  flex-col items-center justify-center space-y-4 w-full pt-5">
        <InputField
          fieldName="firstname"
          type="text"
          handelChange={handelChange}
          placeholder="First Name"
          value={firstname}
        />
        <InputField
          fieldName="lastname"
          type="text"
          handelChange={handelChange}
          placeholder="Last Name"
          value={lastname}
        />
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
        <InputField
          fieldName="passwordConfirm"
          type="password"
          handelChange={handelChange}
          placeholder="Password Confirmation"
          value={passwordConfirm}
        />
        <InputField
          fieldName="DOB"
          type="date"
          handelChange={handelChange}
          placeholder="Date of Birth"
          value={DOB}
        />
        <small>
          Already have account
          <span className=" ml-1 font-bold text-secondaryButtonBg">
            <Link href="/login" className=" ">
              Login
            </Link>
          </span>
        </small>
      </div>
      <Button
        type="submit"
        text="Sign Up"
        classes="max-w-2x bg-primaryButtonBg hover:bg-primaryButtonBgHover text-bodyColor py-2 px-4 "
      />
    </form>
  );
};

export default signup;
