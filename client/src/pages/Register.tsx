import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-white lg:flex">
      <div className="py-20 px-10 justify-center items-center lg:w-1/2">
        <div className="flex flex-col justify-center items-center w-96 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-blue-500">
              Welcome to All Drive
            </h1>
          </div>
          <form className="mt-16 w-full">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="mt-16 text-center flex flex-col items-center space-y-8">
              <div className="flex items-center gap-4">
                <button className="btn btn-primary px-12 rounded-full">
                  Register
                </button>
              </div>
              <div className="text-sm text-gray-400">
                You already have an account?{" "}
                <Link className="link-black" to="/login">
                  Log In here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block text-white bg-blue-500 bg-gradient-to-br from-blue-400 to-blue-500 w-1/2 text-center relative">
        <div className="absoulte left-1/2 top-0 bg-red-500 h-0 flex justify-center">
          <div className="bg-blue-600 w-20 h-[24rem] rounded-b-full"></div>
          <div className="bg-blue-500 w-20 h-[30rem] rounded-b-full"></div>
          <div className="bg-blue-700 w-20 h-[28rem] rounded-b-full"></div>
          <div className="bg-blue-600 w-20 h-[36rem] rounded-b-full"></div>
        </div>
        <div className="text-7xl font-semibold pt-16 uppercase">All Drive</div>
      </div>
    </div>
  );
};

export default Register;
