import React, { useState } from "react";
import Hero from "../images/Hero.PNG";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoBag, IoOpen } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
import JoinIn from "../components/JoinIn";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [mobileSigningIn, setMobileSigningIn] = useState(true);

  // const toggleSignIn = () => {
  //   setIsSigningIn(!isSigningIn);
  // };

  return (
    <>
      <Header />

      <div className="flex flex-row bg-[#F7F5F9] sm:w-[1440px] sm:h-[678px] h-[720px] w-[360px]">
        {/* Desktop Version */}
        <div className="hidden sm:flex sm:flex-col sm:w-[707px] sm:h-[578px] mt-[100px] ml-[100px]">
          <div className="w-[707px] h-[282px]">
            <div className="text-black w-[580px] h-[54px] font-semibold italic text-4xl">
              Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
              <span className="text-[#8064A2]">passion</span>
            </div>

            <div className="w-[706px] h-[120px] font-poppins text-[14px] font-light leading-[30px] mt-[32px]">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </div>

            <div className="w-[706px] h-[120px] font-poppins text-[14px] font-light leading-[30px] mt-[16px]">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </div>
          </div>

          <div className="flex w-[697px] h-[216px] mt-[80px]">
            <img src={Hero} alt="" />
          </div>
        </div>
        {/* Desktop Version  */}

        {/* Mobile Version  */}
        <div className="sm:hidden mx-[24px] mt-[32px]">
          <div className="flex flex-col h-[131px] w-[312px]">
            <div className="w-[288px] h-[27px] italic font-semibold text-[18px]">
              Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
              <span className="text-[#8064A2]">passion</span>
            </div>
            <div className="w-[312px] h-[88px] mt-4 font-poppins font-light text-xs leading-[22px]">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.
            </div>
          </div>

          <div className="w-[312px] h-[364px] mt-12">
            <div className="flex justify-between w-[149px] h-[28px] items-center mx-[82px]">
              <div className={`font-poppins text-xs ${
                mobileSigningIn ? "text-[#8064A2] underline" : " text-[#939CA3]"
              }`}
              onClick={() => setMobileSigningIn(true)}>Sign In</div>
              <div className={`font-poppins text-xs ${
                !mobileSigningIn ? "text-[#8064A2] underline" : "text-[#939CA3]"
              }`}
              onClick={() => setMobileSigningIn(false)}>Join In</div>
            </div>

            {mobileSigningIn ? <SignIn /> : <JoinIn />}
          </div>

          <div className="w-[312px] h-[96px] mt-12">
            <img src={Hero} alt="" />
          </div>
        </div>

        {/* Mobile Version  */}

        <div className="hidden sm:flex flex-col h-[434px] w-[410px] mt-[103px] ml-[123px]">
          <div className="flex gap-8 w-[169px] h-[34px]">
            <div
              className={`font-semibold text-xl ${
                isSigningIn ? "text-[#8064A2] underline" : " text-[#939CA3]"
              }`}
              onClick={() => setIsSigningIn(true)}
            >
              Sign In
            </div>

            <div
              className={`font-semibold text-xl ${
                !isSigningIn ? "text-[#8064A2] underline" : "text-[#939CA3]"
              }`}
              onClick={() => setIsSigningIn(false)}
            >
              Join In
            </div>
          </div>

          {isSigningIn ? <SignIn /> : <JoinIn />}
        </div>


      </div>

      <section>
        <div className="flex w-[1440px] h-[818px] bg-[#FFFFFF]">
          <div className="grid grid-cols-2 justify-between bg-[#FFFFFF] w-[1240px] h-[618px] m-[100px] rounded-md">
            <div className="flex justify-start items-start">
              <div className="w-[608px] h-[297px] rounded-md border-[#CED4DA] border">
                <div className="flex justify-between w-[147px] h-[40px] mt-[40px] ml-[44px] font-semibold text-2xl">
                  <MdPeople className="h-[40px] w-[40px] text-[#8064A2]" />

                  <h1>People</h1>
                </div>
                <div className="h-[81px] w-[520px] font-light mt-[24px] ml-[44px] mr-[44px]">
                  <p className="leading-[27px] font-light text-[18px]">
                    Find a teacher, coach, or expert for your hobby interest in
                    your locality. Find a partner, teammate, accompanist or
                    collaborator.
                  </p>
                </div>
                <div className="w-[122px] h-[40px] mt-[32px] ml-[44px]">
                  <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[30] py-[12px] text-[#8064A2]">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="w-[608px] h-[297px] rounded-md border-[#CED4DA] border">
                <div className="flex justify-between w-[120px] h-[40px] mt-[40px] ml-[44px] font-semibold text-2xl">
                  <FaLocationDot className="h-[33px] w-[23px] text-[#77933C]" />

                  <h1>Place</h1>
                </div>
                <div className="h-[81px] w-[520px] font-light mt-[24px] ml-[44px] mr-[44px]">
                  <p className="leading-[27px] font-light text-[18px]">
                    Find a class, school, playground, auditorium, studio, shop
                    or an event venue. Book a slot at venues that allow booking
                    through hobbycue.
                  </p>
                </div>
                <div className="w-[122px] h-[40px] mt-[32px] ml-[44px]">
                  <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[30] py-[12px] text-[#8064A2]">
                    Meet up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="w-[608px] h-[297px] rounded-md border-[#CED4DA] border">
                <div className="flex justify-between w-[147px] h-[40px] mt-[40px] ml-[44px] font-semibold text-2xl">
                  <IoBag className="h-[31px] w-[36px] text-[#C0504D]" />

                  <h1>Product</h1>
                </div>
                <div className="h-[81px] w-[520px] font-light mt-[24px] ml-[44px] mr-[44px]">
                  <p className="leading-[27px] font-light text-[18px]">
                    Find equipment or supplies required for your hobby. Buy,
                    rent or borrow from shops, online stores or from community
                    members.
                  </p>
                </div>
                <div className="w-[122px] h-[40px] mt-[32px] ml-[44px]">
                  <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[30] py-[12px] text-[#8064A2]">
                    Get it
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="w-[608px] h-[297px] rounded-md border-[#CED4DA] border">
                <div className="flex justify-between w-[147px] h-[40px] mt-[40px] ml-[44px] font-semibold text-2xl">
                  <BiSolidCalendarCheck className="h-[31px] w-[36px] text-[#0096C8]" />

                  <h1>Program</h1>
                </div>
                <div className="h-[81px] w-[520px] font-light mt-[24px] ml-[44px] mr-[44px]">
                  <p className="leading-[27px] font-light text-[18px]">
                    Find events, meetups and workshops related to your hobby.
                    Register or buy tickets online.
                  </p>
                </div>
                <div className="w-[122px] h-[40px] mt-[32px] ml-[44px]">
                  <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[30] py-[12px] text-[#8064A2]">
                    Attend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section>
        <div className="flex w-[1440px] h-[530px]">
          <div className="bg-[#F7FDFF] w-full h-[484px] mt-[16px] mb-[20px]">
            <div className=" w-[1240px] h-[284px] m-[100px] border rounded-lg border-[#CED4DA]">
              <div className=" w-[1160px] h-[204px] m-[40px]">
                <div className="flex justify-between w-[232px] h-[40px]">
                  <LuPlusCircle className="h-[33px] w-[33px] bg-[#0096C8] text-white" />
                  <h1 className="font-semibold text-2xl">Add your own</h1>
                </div>

                <div className="h-[60px] mt-8">
                  <p className="font-light text-[18px]">
                    Are you a teacher or expert? Do you sell or rent out
                    equipment, venue or event tickets? Or, you know someone who
                    should be on hobbycue? Go ahead and Add your Own page
                  </p>
                </div>

                <div className="w-[122px] h-[40px] mt-[32px]">
                  <button className="border border-[#8064A2] rounded-md font-semibold text-[14px] w-full px-[30] py-[12px] text-[#8064A2]">
                    Attend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
