import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateEffect } from "usehooks-ts";
import { PATHS } from "../router";
import axios from "axios";
import { api } from "../api";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
type loginForm = {
    email: string;
    password: string;
};

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [userInfo, setUserInfo] = React.useState<loginForm>({
        email: "",
        password: "",
    });
    const [error, setError] = React.useState<loginForm>({
        email: "",
        password: "",
    });

    const validate = () => {
        let errors: loginForm = {
            email: "",
            password: "",
        };
        if (!userInfo.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
            errors.email = "Email address is invalid";
        }
        if (!userInfo.password) {
            errors.password = "Password is required";
        } else if (userInfo.password.length < 6) {
            errors.password = "Password needs to be 6 characters or more";
        }
        setError((prev) => ({ ...prev, ...errors }));
        if (errors.email || errors.password) {
            return false;
        }

        return true;
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        api.post("/auth/login", userInfo)
            .then((res) => {
                login({
                    token: res.data.token,
                    username: res.data.username,
                });
                toast.success("Welcone to All Drive");
                navigate(PATHS.app.root);
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
            <div className="py-20 px-10 justify-center lg:w-1/2">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-blue-500">
                            Welcome to All Drive
                        </h1>
                    </div>
                    <form className="mt-16" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="johndoe@example.com"
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
                        <div className="mt-16 text-center flex flex-col items-center space-y-8">
                            <div className="flex items-center gap-4">
                                <button className="btn btn-primary px-12 rounded-full">
                                    Log in
                                </button>
                                <Link
                                    to="/forgot-password"
                                    className="btn btn-secondary px-12 rounded-full"
                                >
                                    Forgot Password ?
                                </Link>
                            </div>
                            <div className="text-sm text-gray-400">
                                Don't have an account?{" "}
                                <Link
                                    className="link-black"
                                    to={PATHS.auth.register}
                                >
                                    Register here
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
                    <div className="bg-blue-700 w-20 h-[28rem] rounded-b-full"></div>
                </div>
                <div className="text-7xl font-semibold pt-16 uppercase">
                    All Drive
                </div>
            </div>
        </div>
    );
};

export default Login;
