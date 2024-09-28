import Image from "next/image";

import hero from "@/assets/contact-hero.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact-us"
      className="bg-[#F8D39D] w-full flex flex-row justify-between items-center md:p-16 p-4 py-16"
    >
      <div className="md:w-1/2 h-full w-full flex flex-col justify-start">
        <span className="text-4xl font-bold w-full text-left">Contact Us</span>
        <span className="mt-4 mb-12 w-full text-left">
          Subheading for description or instructions
        </span>

        <form className="w-full flex flex-col md:w-[600px]">
          <div className="w-full flex flex-row justify-between">
            <div className="w-6/12 flex flex-col mr-2">
              <label className="text-xs font-bold mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                required
                className="border-[#e0e0e0] border-solid border-[1px] outline-none w-full rounded-md text-md p-3"
              />
            </div>
            <div className="w-6/12 flex flex-col">
              <label className="text-xs font-bold mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                required
                className="border-[#e0e0e0] border-solid border-[1px] outline-none w-full rounded-md text-md p-3"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-6">
            <label className="text-xs font-bold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="john.doe@google.com"
              required
              className="border-[#e0e0e0] border-solid border-[1px] outline-none w-full rounded-md text-md p-3"
            />
          </div>
          <div className="w-full flex flex-col mt-6">
            <label className="text-xs font-bold mb-2">Your Message</label>
            <textarea
              type="text"
              placeholder="Hey, we have some query!"
              required
              className="border-[#e0e0e0] border-solid border-[1px] outline-none w-full rounded-md text-md p-3 resize-none"
            />
          </div>
          <Link
            href="mailto:community@girlscript.tech"
            className="w-full bg-black text-white mt-6 p-4 px-6 text-xs rounded-md text-center"
          >
            Submit
          </Link>
        </form>
      </div>

      <Image src={hero} className="w-1/3 md:block hidden" />
    </div>
  );
};

export default Contact;
