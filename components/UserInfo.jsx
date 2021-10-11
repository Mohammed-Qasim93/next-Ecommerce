import { useState } from "react";

import InputField from "./InputField";

const UserInfo = ({ user }) => {
  //   if (!user) return <ErrorPage />;
  const initialState = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    DOB: user.DOB,
  };

  const [userState, setUserState] = useState(initialState);
  const { firstname, lastname, email, DOB } = userState;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
    // dispatch({ type: {}, payload: {} });
  };

  return (
    <div className="flex justify-center flex-col items-center space-y-3">
      <InputField
        fieldName="firstname"
        type="text"
        handelChange={handelChange}
        value={firstname}
      />
      <InputField
        fieldName="lastname"
        type="text"
        handelChange={handelChange}
        value={lastname}
      />
      <InputField
        fieldName="email"
        type="text"
        handelChange={handelChange}
        value={email}
      />
      <InputField
        fieldName="DOB"
        type="text"
        handelChange={handelChange}
        value={DOB}
      />
    </div>
  );
};

export default UserInfo;
