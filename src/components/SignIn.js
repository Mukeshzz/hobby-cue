import React from 'react'

const SignIn = () => {
  return (
    <div className="w-[410px] h-[368px] mt-[32px]">
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
                  <div>
                    <input type="checkbox" /> Remember me
                  </div>
                  <div>Forgot password</div>
                </div>
                <div className=" rounded-md w-full h-[40px] border-[1px] border-[#8064A2] font-semibold text-[14px] text-center mt-6">
                  Continue
                </div>
              </div>
            </div>
          </div>
  )
}

export default SignIn