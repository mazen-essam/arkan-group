import Image from "next/image";
import SigninValidation from "./SigninValidation";

export default function Signin() {
  return (
    <section>
      <div className="container mx-auto mt-24">
        {/* <nav>
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </nav> */}

        <div className="text-center">
          <h1 className="font-bold text-4xl">Sign in</h1>
          <p className="text-gray-500 my-2 text-sm">
            Welcome! Please fill the details to get started.
          </p>

          <div className="flex justify-center space-x-4">
            <button className="w-1/4 bg-transparent text-black border border-gray-300 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
              <i className="fab fa-google text-lg mr-2"></i> Sign in with Google
            </button>

            <button className="w-1/4 bg-transparent text-black border border-gray-300 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
              <i className="fab fa-facebook text-blue-600 group-hover:text-white transition text-lg mr-2"></i>{" "}
              Sign in with Facebook
            </button>
          </div>

          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/4 bg-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="h-px w-1/4 bg-gray-300"></div>
          </div>
        </div>

        <SigninValidation />

        <div className="text-center mt-4 text-sm">
          <p>
            By proceeding, you agree to the
            <span className="text-purple-600 cursor-pointer">
              {" "}
              terms and conditions{" "}
            </span>
            and
            <span className="text-purple-600 cursor-pointer">
              {" "}
              privacy policy
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
