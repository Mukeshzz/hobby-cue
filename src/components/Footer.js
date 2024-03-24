import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col w-[1440px] h-[380px] ">
        <div className="grid grid-cols-4 w-[1217px] h-[182px] mt-[60px] ml-[102px] ">
          <div>
            <h1 className="font-bold text-[18px]">Hobbycue</h1>
            <br />
            <div className="font-normal text-[14px]">
              <p>About Us</p>
              <p>Our Services</p>
              <p>Work with Us</p>
              <p>FAQ</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-[18px]">How Do I</h1>
            <br />
            <div className="font-normal text-[14px]">
              <p>Sign Up</p>
              <p>Addd a Listing</p>
              <p>Claim Listing</p>
              <p>Post a Query</p>
              <p>Add a Blog Post</p>
              <p>Other Queries</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[18px]">Quick Links</h1>
            <br />
            <div className="font-normal text-[14px]">
              <p>Listings</p>
              <p>Blog Posts</p>
              <p>Shop / Store</p>
              <p>Community</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-[18px]">Social Media</h1>
          </div>
        </div>

        <div className="w-full h-[70px] text-center items-center py-[30px] bg-[#F7F5F9] font-medium text-[14px] mt-[60px]">
          <p>© Purple Cues Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
