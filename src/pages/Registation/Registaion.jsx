import {useFormik} from "formik";
import {resistationSchema} from "../../schemas";
import {Link} from "react-router-dom";

const Registation = () => {
    const initialResisterValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: resistationSchema,
            onSubmit: async (values, action) => {
                console.log(values, action);
                // const {name, email, password} = values;
                // try {
                //     const response = await fetch(
                //         `${process.env.BASE_URL}/user/create`,
                //         {
                //             method: "POST",
                //             headers: {
                //                 "Content-Type": "application/json",
                //             },
                //             body: JSON.stringify({
                //                 name,
                //                 email,
                //                 password,
                //                 role: params.role,
                //             }),
                //         }
                //     );
                //     const data = await response.json();
                //     if (data.success) {
                //         toast.success("Account created successfully.");
                //         action.resetForm();
                //         router.push("/login");
                //     } else {
                //         toast.error(data.message);
                //     }
                // } catch (error) {
                //     console.log(error);
                // }
            },
        });

    return (
        <div className="bg-slate-950">
            <div className="h-screen w-full  py-12 pt-16">
                <div className="container">
                    <div className=" flex h-full items-center">
                        <div className="w-full max-w-md mx-auto p-6">
                            <div className="mt-7 bg-white  border  rounded-lg shadow-lg">
                                <div className="p-4 sm:p-7">
                                    <div className="text-center">
                                        <h2 className="block text-2xl font-bold text-dark">
                                            Sign up on{" "}
                                            <span> Mental Health</span>
                                        </h2>
                                    </div>

                                    <div className="mt-5">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-y-4 text-base ">
                                                <div className="relative mb-1">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                        placeholder="Enter name.."
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="name"
                                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                        Name
                                                    </label>
                                                    {errors.name &&
                                                        touched.name && (
                                                            <p className="text-red-600 text-sm">
                                                                {errors.name}
                                                            </p>
                                                        )}
                                                </div>

                                                <div className="relative">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2  border-gray-300 text-gray-900 focus:outline-none "
                                                        placeholder="Enter email.."
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="absolute left-0 -top-3.5  text-gray-600 text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600  peer-focus:text-sm">
                                                        Email Address
                                                    </label>
                                                    {errors.email &&
                                                        touched.email && (
                                                            <p className="text-red-600 text-sm">
                                                                {errors.email}
                                                            </p>
                                                        )}
                                                </div>

                                                <div className="relative ">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                        placeholder="Enter password.."
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
                                                                {
                                                                    errors.password
                                                                }
                                                            </p>
                                                        )}
                                                </div>

                                                <div className="relative ">
                                                    <input
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        type="password"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                        placeholder="Confirm password.."
                                                        value={
                                                            values.confirmPassword
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                        Confirm Password
                                                    </label>
                                                    {errors.confirmPassword &&
                                                        touched.confirmPassword && (
                                                            <p className="text-red-600 text-sm">
                                                                {
                                                                    errors.confirmPassword
                                                                }
                                                            </p>
                                                        )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn-primary inline-flex justify-center items-center w-full ">
                                                    Sign Up Now
                                                </button>
                                                <div className="mt-1">
                                                    <p className=" dark:text-darkText text-gray-900">
                                                        Already have an account?{" "}
                                                        <Link
                                                            to="/login"
                                                            className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1">
                                                            <span>
                                                                {" "}
                                                                Login here.
                                                            </span>
                                                        </Link>
                                                    </p>
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
        </div>
    );
};

export default Registation;
