import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10 min-h-screen space-y-12">
      <div className="flex flex-col justify-center mx-auto w-full pb-12 md:pb-0 px-4 md:px-10 lg:px-20 border-[#81d8d0] border-b-[1px] md:border-b-0 md:border-r-[1px] ">
        <div className="mb-8 text-center md:text-left">
          <h1 className="my-1 text-2xl lg:text-3xl">Sign in</h1>
          <p className="text-sm font-light text-gray-600">
            Please sign in to your Timeless Account
          </p>
        </div>
        <form action="" className="space-y-10">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-1 border-black border-b-[1px] outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full p-1 border-black border-b-[1px] outline-none"
            />
          </div>

          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold bg-black hover:bg-[#81d8d0] text-white hover:text-black transition-all duration-300"
              >
                Sign in
              </button>
            </div>
            <p className="pt-4 text-xs hover:underline underline-offset-4 cursor-pointer">
              Forgot your password?
            </p>
          </div>
        </form>
      </div>

      <div className="px-4 md:px-12 lg:px-20 text-center md:text-left min-h-[250px]">
        <h1 className="text-2xl lg:text-3xl">Create an Account</h1>
        <p className="text-sm font-light my-2">
          Save time during checkout, view your shopping bag and saved items from
          any device and access your order history.
        </p>
        <Link href={"/signUp"}>
          <button
            type="button"
            className="w-full px-8 py-3 mt-4 font-semibold bg-black hover:bg-[#81d8d0] text-white hover:text-black transition-all duration-300"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
