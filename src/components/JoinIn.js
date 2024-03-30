import React from "react";

const JoinIn = () => {
  return (
    <div className="sm:w-[410px] sm:h-[368px] sm:mt-[32px] w-[312px] h-[340px] mt-6">
      <div className="hidden sm:flex flex-col">
        <div className="flex flex-col h-[96px] text-center ">
          <div className="justify-center items-center rounded-md w-full h-[40px] m-auto border-[1px] border-[#8064A2] font-semibold text-[14px]">
            Continue with Google
          </div>

          <div className=" rounded-md w-full h-[40px] border-[1px] border-[#8064A2] font-semibold text-[14px]">
            Continue with Facebook
          </div>
        </div>

        <div className="h[16px] mt-[28px] text-center">Or connect with</div>

        <div className="h-[200px] mt-7">
          <div className="flex flex-col gap-4  h-[96px]">
            <input
              className="h-[40px] border border-[#EBEDF0] rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              className="h-[40px] border border-[#EBEDF0] rounded-md"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="h-[80px] mt-6">
            <div className="flex justify-between">
              <div className="text-[12px] text-center font-[400]">
                By continuing, you agree to our{" "}
                <span className="font-semibold">Terms of Service</span> and{" "}
                <span className="font-semibold">Privacy Policy.</span>
              </div>
            </div>
            <div className=" rounded-md w-full h-[40px] bg-[#8064A2] text-white font-semibold text-[14px] text-center mt-6">
              Agree and Continue
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="flex w-[312px] h-[32px] mt-6">
          <input
            className="w-full rounded-sm border border-[#EBEDF0] bg-[#FFFFFF]"
            placeholder="Email"
            type="text"
            alt=" "
          />
        </div>

        <div className="flex w-[312px] h-[32px] mt-4">
          <input
            className="w-full rounded-sm border border-[#EBEDF0] bg-[#FFFFFF]"
            placeholder="Password"
            type="text"
            alt=" "
          />
        </div>

        <div className="mt-8 h-[14px]">
          <p className="font-normal text-[9px] font-poppins">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className=" rounded-md w-full h-[32px] border-[1px] bg-[#8064A2] text-white py-2 font-poppins font-semibold text-xs text-center mt-[10px]">
          Continue
        </div>

        <div className="h-[16px] mt-6 font-poppins font-semibold text-xs text-center">
          Or connect with
        </div>

        <div className="rounded-md w-full h-[32px] mt-6 py-2  border-[1px] border-[#8064A2] font-semibold text-[12px] text-center">
          Continue with Google
        </div>

        <div className=" rounded-md w-full h-[32px] mt-4 py-2 border-[1px] border-[#8064A2] font-semibold text-[12px] text-center">
          Continue with Facebook
        </div>
      </div>
    </div>
  );
};

export default JoinIn;
