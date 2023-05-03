import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../router";
import { useUpdateEffect } from "usehooks-ts";
import { api } from "../api";
import { toast } from "react-toastify";

type registerForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState<registerForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = React.useState<registerForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validate = () => {
        let error: registerForm = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
        if (!userInfo.name) {
            error.name = "Name is required";
        }
        if (!userInfo.email) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
            error.email = "Email address is invalid";
        }
        if (!userInfo.password) {
            error.password = "Password is required";
        } else if (userInfo.password.length < 6) {
            error.password = "Password needs to be 6 characters or more";
        }
        if (!userInfo.confirmPassword) {
            error.confirmPassword = "Confirm Password is required";
        }
        if (userInfo.confirmPassword !== userInfo.password) {
            error.confirmPassword = "Passwords do not match";
        }
        setError((prev) => ({ ...prev, ...error }));
        if (
            error.name ||
            error.email ||
            error.password ||
            error.confirmPassword
        ) {
            return false;
        }
        return true;
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        api.post("/auth/register", {
            username: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
        })
            .then((res) => {
                toast.success("Registered Successfully");
                navigate(PATHS.auth.login);
            })
            .catch((err) => {
                toast.error(err.msg);
            });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    useUpdateEffect(() => {
        validate();
    }, [userInfo]);

    return (
        <div className="min-h-screen bg-white lg:flex">
            <div className="py-20 px-10 justify-center items-center lg:w-1/2">
                <div className="flex flex-col justify-center items-center w-96 mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-blue-500">
                            Welcome to All Drive
                        </h1>
                    </div>
                    <form className="mt-16 w-full" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="form-control"
                                value={userInfo.name}
                                onChange={handleChange}
                            />
                            {error.name && (
                                <small className="text-red-500">
                                    {error.name}
                                </small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="johndoe@example.com"
                                name="email"
                                id="email"
                                value={userInfo.email}
                                onChange={handleChange}
                            />
                            {error.email && (
                                <small className="text-red-500">
                                    {error.email}
                                </small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="********"
                                value={userInfo.password}
                                onChange={handleChange}
                            />
                            {error.password && (
                                <small className="text-red-500">
                                    {error.password}
                                </small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirm-password"
                                className="form-control"
                                placeholder="********"
                                value={userInfo.confirmPassword}
                                onChange={handleChange}
                            />
                            {error.confirmPassword && (
                                <small className="text-red-500">
                                    {error.confirmPassword}
                                </small>
                            )}
                        </div>
                        <div className="mt-16 text-center flex flex-col items-center space-y-8">
                            <div className="flex items-center gap-4">
                                <button className="btn btn-primary px-12 rounded-full">
                                    Register
                                </button>
                            </div>
                            <div className="text-sm text-gray-400">
                                You already have an account?{" "}
                                <Link
                                    className="link-black"
                                    to={PATHS.auth.login}
                                >
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
                <div className="text-7xl font-semibold pt-16 uppercase">
                    All Drive
                </div>
            </div>
        </div>
    );
};

export default Register;
