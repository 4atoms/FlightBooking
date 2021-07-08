import React, { useContext } from "react";
import RefContext from "utilities/refContext";
import { Input } from "antd";

const LoginForm = () => {
  const context = useContext(RefContext);

  const {
    store: { username, password },
  } = context;

  return (
    <>
      <div>
        <Input type="text" value={username} />
      </div>
      <div>
        <Input type="password" value={password} />
      </div>
    </>
  );
};

export default LoginForm;
