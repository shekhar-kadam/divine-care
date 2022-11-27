import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ user, setLoginUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, user);
    if (
      email.toString() === user.email.toString() &&
      password.toString() === user.password.toString()
    ) {
      localStorage.setItem("divineCareUser", JSON.stringify(user));
      setLoginUser(user);
      toast.success("Login Successfull");
    } else {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form onSubmit={submitHandler} className="w-[500px] max-w-[90%]">
          <h1 className="text-2xl text-center font-normal text-gray-500 mb-5">
            LOGIN TO CONTINUE
          </h1>

          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 p-2 w-full mb-4 outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 p-2 w-full mb-10 outline-none"
            type={"password"}
            placeholder="password"
          />
          <button
            type="submit"
            className="w-[150px] bg-blue-500 text-white p-2 rounded-md my-2 mx-auto block"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
