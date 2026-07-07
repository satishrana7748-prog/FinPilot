import Logo from "../../components/common/Logo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">

      <div className="bg-white rounded-3xl p-10 w-[450px] shadow-2xl">

        <Logo />

        <div className="mt-10">

          <Input
            label="Full Name"
            type="text"
            placeholder="Enter Full Name"
          />

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

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
          />

          <Button text="Create Account" />

          <p className="text-center mt-6">

            Already have an account?

            {" "}

            <Link
              to="/"
              className="text-blue-700 font-bold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;