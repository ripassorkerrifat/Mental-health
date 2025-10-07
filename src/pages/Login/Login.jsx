/* eslint-disable react/no-unescaped-entities */
import {useFormik} from "formik";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {loginSchema} from "../../schemas";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect, useState} from "react";

const LoginPage = () => {
    const {setToken, setLoading, token, user} = useUserContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const initialLoginValues = {
        email: "",
        password: "",
    };

    // Only redirect if both token AND user are valid
    useEffect(() => {
        if (token && user) {
            navigate(from, {replace: true});
        }
    }, [token, user, navigate, from]);

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialLoginValues,
            validationSchema: loginSchema,
            onSubmit: (values, action) => {
                const {email, password} = values;
                const loginInfo = {
                    email,
                    password,
                };

                setIsSubmitting(true);
                fetch(`${config.base_url}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(loginInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            localStorage.setItem(
                                "accessToken",
                                data.data.accessToken
                            );
                            setToken(data.data.accessToken);
                            setLoading(false);
                            navigate(from, {replace: true});
                            toast.success("User Logged Successfully.");
                            action.resetForm();
                        } else {
                            console.log(data.errorMessage[0].message);
                            toast.error(data.errorMessage[0].message);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(
                            err.message || "Login failed. Please try again."
                        );
                    })
                    .finally(() => {
                        setIsSubmitting(false);
                    });
            },
        });

    return (
        <div className="bg-gray-950">
            <div className="h-screen w-full  py-12 pt-20">
                <div className="container ">
                    <div className=" flex flex-col justify-center py-14">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto mx-2">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-300 shadow-lg 
                        transform  -rotate-6 rounded-3xl"></div>
                            <div className="relative px-4 py-7 bg-gray-50 shadow-lg rounded-3xl sm:p-10">
                                <div className="max-w-md mx-auto">
                                    <div>
                                        <h2 className="text-2xl text-gray-700 font-semibold">
                                            Sign In on{" "}
                                            <span>Mental Health</span>
                                        </h2>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 dark:rounded-md dark:bg-slate-50 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    placeholder="Enter email.."
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600  peer-focus:text-sm">
                                                    Email Address
                                                </label>
                                                {errors.email &&
                                                    touched.email && (
                                                        <p className="text-red-600 text-sm">
                                                            {errors.email}
                                                        </p>
                                                    )}
                                            </div>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  dark:bg-slate-50 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    placeholder="Enter password..."
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                    Password
                                                </label>
                                                {errors.password &&
                                                    touched.password && (
                                                        <p className="text-red-600 text-sm">
                                                            {errors.password}
                                                        </p>
                                                    )}
                                            </div>
                                            <div className="relative">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="btn-primary  px-4 py-1.5 w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg
                                                                className="animate-spin h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24">
                                                                <circle
                                                                    className="opacity-25"
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4"></circle>
                                                                <path
                                                                    className="opacity-75"
                                                                    fill="currentColor"
                                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            <span>
                                                                Logging in...
                                                            </span>
                                                        </>
                                                    ) : (
                                                        "Login"
                                                    )}
                                                </button>
                                            </div>
                                            <p className="">
                                                If you don't have an account?
                                                Please{" "}
                                                <Link
                                                    className="text-blue-600 decoration-2 hover:underline font-medium "
                                                    to={"/registration"}>
                                                    <span>Sing up </span>{" "}
                                                </Link>
                                                now
                                            </p>
                                            <div>
                                                <p>
                                                    Demo account :
                                                    ripassorkerrifat@gmail.com
                                                </p>
                                                <p> Password : asdasd</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
