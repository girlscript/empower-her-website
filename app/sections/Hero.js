import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen flex flex-col justify-center items-center md:p-16 p-4 py-16"
    >
      <span className="text-center md:text-6xl text-4xl font-bold">
        EmpowerHER Program
      </span>
      <span className="text-[#828282] mt-8 md:w-2/3 w-full text-center text-xl">
        We are excited to announce that GirlScript is partnering with Masai
        School for the EmpowerHer program—a 100% scholarship initiative designed
        to help women across India build successful tech careers, in
        collaboration with KSIF and powered by AVPN.
      </span>
      <Link
        href="https://bit.ly/EmpowerHerGirlScript"
        className="bg-black text-white p-4 px-6 text-xs rounded-xl"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default Hero;
