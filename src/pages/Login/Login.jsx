/* eslint-disable react/no-unescaped-entities */
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import {loginSchema} from "../../schemas";

const LoginPage = () => {
    // const {setToken, setLoading, userId, setUserId} = useUserContext();

    const initialLoginValues = {
        email: "",
        password: "",
    };
    // useEffect(() => {
    //     if (userId) {
    //         router.push("/");
    //     }
    // }, [userId]);

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

                console.log(loginInfo);

                // fetch(`https://eduphy-server.vercel.app/api/v1/auth/login`, {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json",
                //     },
                //     body: JSON.stringify(loginInfo),
                // })
                //     .then((res) => res.json())
                //     .then((data) => {
                //         if (data.success) {
                //             localStorage.setItem(
                //                 "accessToken",
                //                 data.data.accessToken
                //             );
                //             localStorage.setItem("userId", data.data.id);
                //             setUserId(data.data.id);
                //             setToken(data.data.accessToken);
                //             // router.push("/");
                //             setLoading(false);

                //             toast.success("User Logged Successfully.");
                //             action.resetForm();
                //         } else {
                //             console.log(data.errorMessage[0].message);
                //             return toast.error(data.errorMessage[0].message);
                //         }
                //     })
                //     .catch((err) => {
                //         return toast.error(err);
                //     });
            },
        });

    return (
        <div className="bg-slate-950">
            <div className="h-screen w-full  py-12 pt-16">
                <div className="container ">
                    <div className=" flex flex-col justify-center py-14">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto mx-2">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg 
                        transform  -rotate-6 rounded-3xl"></div>
                            <div className="relative px-4 py-7 bg-white shadow-lg rounded-3xl sm:p-10">
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
                                                    className="btn-primary  px-4 py-1.5 w-full">
                                                    Login
                                                </button>
                                            </div>
                                            <p className="max-w-xs text-base">
                                                If you don't have an account?
                                                Please{" "}
                                                <Link
                                                    to={"/registration"}
                                                    className="text-[#00bd29] underline">
                                                    Sing up{" "}
                                                </Link>
                                                now
                                            </p>
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
