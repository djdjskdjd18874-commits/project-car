import { Formik, Form, Field } from "formik";

interface formInitValueProps {
  email: string;
  password: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  check: boolean;
}

export default function MyForm() {
  const initValues: formInitValueProps = {
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    check: false,
  };

  const handleSubmit = async (values: formInitValueProps) => {
    console.log("Form values:", values);
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: values.email,
          password: values.password,
          address: values.address,
          address2: values.address2,
          city: values.city,
          state: values.state,
          zip: values.zip,
          check: values.check,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Login failed: " + (errorData.message || "Unknown error"));
        return;
      }

      const data = await res.json();
      alert("Login successful: " + JSON.stringify(data));
      localStorage.setItem("jwt_token", data.token);
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please sign in to continue
        </p>

        {/* Form */}
        <Formik initialValues={initValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold text-gray-900">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm font-semibold text-gray-900">
                  Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="1234 Main St"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-semibold text-gray-900">
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Your city"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* State */}
              <div className="flex flex-col">
                <label htmlFor="state" className="text-sm font-semibold text-gray-900">
                  State
                </label>
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose...</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </Field>
              </div>

              {/* Zip */}
              <div className="flex flex-col">
                <label htmlFor="zip" className="text-sm font-semibold text-gray-900">
                  Zip
                </label>
                <Field
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="12345"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="check"
                  name="check"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>

        {/* Footer Links */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
