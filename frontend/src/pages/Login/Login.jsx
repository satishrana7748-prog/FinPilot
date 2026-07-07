import Logo from "../../components/common/Logo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">

      <div className="bg-white rounded-3xl p-10 w-[450px] shadow-2xl">

        <Logo />

        <div className="mt-10">

          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
          />

          <Button text="Login" />

          <p className="text-center mt-6">

            Don't have an account?

            {" "}

            <Link
              to="/register"
              className="text-blue-700 font-bold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;