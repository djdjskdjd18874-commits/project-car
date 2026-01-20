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
          "Accept": "application/json",
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
        alert("فشل تسجيل الدخول: " + (errorData.message || "Unknown error"));
        return;
      }

      const data = await res.json();
      alert("تم تسجيل الدخول بنجاح: " + JSON.stringify(data));
      localStorage.setItem("jwt_token", data.token);
    } catch (error) {
      console.error("خطأ أثناء حفظ البيانات:", error);
      alert("تعذر الاتصال بالسيرفر. تأكد أن الرابط صحيح وأن السيرفر شغال.");
    }
  };

  return (
    <>
    <br />
      <div
        className="text-black hidden md:grid  bg-fixed bg-center  h-screen grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-12"
        style={{ backgroundImage: "url('photo/bg-car.jpg')" }}
      >
        {/* النصوص */}
        <div className="slide-in-left">
          <h1 className="text-white text-4xl font-bold">Luxury Wheels</h1>
          <h3 className="text-base mt-4 text-white">
            Enjoy our premium car rental and limousine services in Egypt
          </h3>
          <h3 className="text-base mt-4 text-white">
            Are you looking for a reliable, upscale, and professional service? Look no further! Luxury Wheels is
          </h3>
          <span className="text-base mt-4 text-white">here for you</span>
          <h2 className="text-xl mt-4 font-semibold text-white">
            Just fill out the form, and we will contact you!
          </h2>
        </div>

        {/* الفورم */}
        <Formik initialValues={initValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="bg-white/70 slide-in-right opacity-80 backdrop-blur-md  p-8 rounded-lg shadow-lg max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

          
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold text-gray-900">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

             
              <div className="md:col-span-2 flex flex-col">
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

             
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="address2" className="text-sm font-semibold text-gray-900">
                  Address 2
                </label>
                <Field
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

             
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-semibold text-gray-900">
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
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

             
              <div className="flex flex-col">
                <label htmlFor="zip" className="text-sm font-semibold text-gray-900">
                  Zip
                </label>
                <Field
                  type="text"
                  id="zip"
                  name="zip"
                  className="mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2 flex items-center">
                <Field
                  type="checkbox"
                  id="check"
                  name="check"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check" className="ml-2 text-sm text-gray-700">
                  Check me out
                </label>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
